import { SettingFileItem } from 'src/app/models/setting-file-item.model';
import { SettingFile } from 'src/app/models/setting-file.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RandomService } from 'src/app/services/random.service';

export abstract class GameDto {
	isOver = false;
	hasSelectedFile = false;

	canSkipItems = false;

	gameSettings: SettingFile;
	currentItem: SettingFileItem;
	answers: { right: SettingFileItem[], wrong: SettingFileItem[] } = { right: [], wrong: [] };

	protected currentItemIndex = -1;

	constructor(
		protected localStorageService: LocalStorageService,
		protected randomService: RandomService
	) { }

	init(title: string, allowPositionChange: boolean) {
		this.hasSelectedFile = true;

		this.gameSettings = this.localStorageService.get(title);
		this.gameSettings.allowPositionChange = allowPositionChange;
		this.setCurrentItem();
	}

	end() {
		this.isOver = true;
	}

	protected setCurrentItem() {
		if (this.currentItemIndex >= 0) {
			this.gameSettings.items.splice(this.currentItemIndex, 1);
		}

		if (!this.gameSettings.items.length) {
			this.end();
			return;
		}

		this.canSkipItems = this.gameSettings.items.length > 1;

		this.currentItemIndex = this.randomService.getRandomNumber(this.gameSettings.items.length);
		this.currentItem = new SettingFileItem(
			this.gameSettings.items[this.currentItemIndex].front,
			this.gameSettings.items[this.currentItemIndex].back
		);

		if (this.gameSettings.allowPositionChange) {
			this.randomizeItem(this.currentItem);
		}
	}

	skipItem(): void {
		let randomItemIndex: number;
		do {
			randomItemIndex = this.randomService.getRandomNumber(this.gameSettings.items.length);
		} while (randomItemIndex === this.currentItemIndex);

		this.currentItemIndex = randomItemIndex;
		this.currentItem = new SettingFileItem(
			this.gameSettings.items[this.currentItemIndex].front,
			this.gameSettings.items[this.currentItemIndex].back
		);

		if (this.gameSettings.allowPositionChange) {
			this.randomizeItem(this.currentItem);
		}
	}

	protected randomizeItem(item: SettingFileItem): void {
		if (this.randomService.getRandomNumber(10) % 2 === 0) {
			item.swapSides();
		}
	}
}
