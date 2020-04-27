import { GameDto } from './game.dto';

export class WriteGameEasyDto extends GameDto {
	hasResult = false;
	isAnswerCorrect = false;
	isAnswerCanceled = false;
	letterBoxes: { index: number, value: string }[] = [];

	checkAnswer(): void {
		const answer = this.letterBoxes.map(e => e.value).join('');
		this.hasResult = true;
		this.isAnswerCorrect = answer === this.currentItem.back;

		if (this.isAnswerCorrect) {
			this.answers.right.push(this.currentItem);
		}
	}

	cancelItem(): void {
		this.hasResult = true;
		this.isAnswerCanceled = true;

		this.answers.wrong.push(this.currentItem);
	}

	skipItem(): void {
		if (this.hasResult && (this.isAnswerCorrect || this.isAnswerCanceled)) {
			super.setCurrentItem();
		}
		else {
			super.skipItem();
		}

		this.initBoxes();
	}

	initBoxes() {
		this.hasResult = false;
		this.isAnswerCorrect = false;
		this.isAnswerCanceled = false;

		this.letterBoxes = [];
		for (let i = 0; i <= this.currentItem.back.length - 1; i++) {
			this.letterBoxes.push({ index: i, value: '' });
		}
	}
}
