import { SettingFileItem } from 'src/app/models/setting-file-item.model';
import { SettingFile } from 'src/app/models/setting-file.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

export class GameDto {
	isOver = false;
	hasSelectedFile = false;

	gameSettings: SettingFile;
	currentItem: SettingFileItem;
	answers: { right: SettingFileItem[], wrong: SettingFileItem[] } = { right: [], wrong: [] };

	constructor(
		private localStorageService: LocalStorageService,
		private settingFileTitle?: string
	) {
		if (settingFileTitle) {
			this.init(this.settingFileTitle);
		}
	}

	init(title: string) {
		this.hasSelectedFile = true;

		this.settingFileTitle = title;

		this.gameSettings = this.localStorageService.get(title);
		this.setCurrentItem();
	}

	selectAnswer(isCorrect: boolean) {
		if (isCorrect) {
			this.answers.right.push(this.currentItem);
		} else {
			this.answers.wrong.push(this.currentItem);
		}

		this.setCurrentItem();
	}

	end() {
		this.isOver = true;
	}

	private setCurrentItem() {
		const index = this.gameSettings.items.indexOf(this.currentItem);
		this.gameSettings.items.splice(index, 1);
		if (!this.gameSettings.items.length) {
			this.end();
			return;
		}

		this.currentItem = this.gameSettings.items[Math.floor(Math.random() * this.gameSettings.items.length)];
	}
}
