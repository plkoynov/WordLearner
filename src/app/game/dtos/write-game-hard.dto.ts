import { GameDto } from './game.dto';

export class WriteGameHardDto extends GameDto {
	hasResult = false;
	isAnswerCorrect = false;
	isAnswerCanceled = false;
	answer: string;

	checkAnswer(): void {
		this.hasResult = true;
		if (!this.answer || !this.answer.trim()) {
			this.isAnswerCorrect = false;
			return;
		}

		this.isAnswerCorrect = this.answer.toLowerCase() === this.currentItem.back.toLowerCase();

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

		this.setup();
	}

	setup() {
		this.hasResult = false;
		this.isAnswerCorrect = false;
		this.isAnswerCanceled = false;
		this.answer = '';
	}
}
