import { GameDto } from './game.dto';

export class LearnGameDto extends GameDto {
	selectAnswer(isCorrect: boolean): void {
		if (isCorrect) {
			this.answers.right.push(this.currentItem);
		} else {
			this.answers.wrong.push(this.currentItem);
		}

		this.setCurrentItem();
	}
}
