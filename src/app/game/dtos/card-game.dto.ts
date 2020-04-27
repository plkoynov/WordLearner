import { SettingFileItem } from 'src/app/models/setting-file-item.model';
import { GameDto } from './game.dto';

export class CardGameDto extends GameDto {

	selectAnswer(isCorrect: boolean): void {
		if (isCorrect) {
			this.answers.right.push(this.currentItem);
		} else {
			this.answers.wrong.push(this.currentItem);
		}

		this.setCurrentItem();
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
		this.randomizeItem(this.currentItem);
	}
}
