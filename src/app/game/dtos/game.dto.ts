import { SettingFileItem } from 'src/app/models/setting-file-item.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RandomService } from 'src/app/services/random.service';
import { GameSettingsDto } from './game-settings.dto';

export abstract class GameDto {
  title: string;

  items: SettingFileItem[] = [];

  isOver = false;

  hasSelectedFile = false;

  currentItem: SettingFileItem;

  answers: { right: SettingFileItem[], wrong: SettingFileItem[] } = { right: [], wrong: [] };

  settings: GameSettingsDto;

  protected currentItemIndex = -1;

  constructor(
    protected localStorageService: LocalStorageService,
    protected randomService: RandomService,
  ) { }

  init(settings: GameSettingsDto) {
    const file = this.localStorageService.get(settings.gameTitle);
    this.hasSelectedFile = true;
    this.title = file.title;
    this.items = file.items;

    this.settings = settings;

    this.setCurrentItem();
  }

  end() {
    this.isOver = true;
  }

  protected setCurrentItem() {
    if (this.currentItemIndex >= 0) {
      this.items.splice(this.currentItemIndex, 1);
    }

    if (!this.items.length) {
      this.end();
      return;
    }

    this.currentItemIndex = this.randomService.getRandomNumber(this.items.length);
    this.currentItem = new SettingFileItem(
      this.items[this.currentItemIndex].front,
      this.items[this.currentItemIndex].back,
    );

    if (this.settings.allowPositionChange) {
      this.randomizeItem(this.currentItem);
    }
  }

  skipItem(): void {
    if (this.items.length === 1) {
      return;
    }

    let randomItemIndex: number;
    do {
      randomItemIndex = this.randomService.getRandomNumber(this.items.length);
    } while (randomItemIndex === this.currentItemIndex);

    this.currentItemIndex = randomItemIndex;
    this.currentItem = new SettingFileItem(
      this.items[this.currentItemIndex].front,
      this.items[this.currentItemIndex].back,
    );

    if (this.settings.allowPositionChange) {
      this.randomizeItem(this.currentItem);
    }
  }

  protected randomizeItem(item: SettingFileItem): void {
    if (this.randomService.getRandomNumber(10) % 2 === 0) {
      item.swapSides();
    }
  }
}
