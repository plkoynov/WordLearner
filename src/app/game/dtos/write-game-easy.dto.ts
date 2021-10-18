import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RandomService } from 'src/app/services/random.service';
import { GameDto } from './game.dto';
import { Word } from './word.dto';

export class WriteGameEasyDto extends GameDto {
	hasResult = false;
	isAnswerCorrect = false;
	isAnswerCanceled = false;

	words: Word[] = [];

	lines: WordLine[] = [];

	constructor(
		private maxCharsInLine: number,
		protected localStorageService: LocalStorageService,
		protected randomService: RandomService
	) {
		super(localStorageService, randomService);
	}

	checkAnswer(): void {
		let answer = '';
		this.words.forEach((word: Word, i) => {
			answer += word.getValue();
			if (i !== this.words.length - 1) {
				answer += ' ';
			}
		});

		this.hasResult = true;
		this.isAnswerCorrect = answer === this.currentItem.back.trim().toLowerCase();

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

		this.initWords();
	}

	initWords() {
		this.hasResult = false;
		this.isAnswerCorrect = false;
		this.isAnswerCanceled = false;

		this.words = this.currentItem.back.split(' ').map(e => new Word(e));
		for (let i = 0; i <= this.words.length - 1; i++) {
			if (i == 0) {
				const newLine = new WordLine();
				newLine.appendWord(this.words[i]);
				this.lines.push(newLine);

				continue;
			}

			let lastLine = this.lines[this.lines.length - 1];
			if (lastLine.getLength() + this.words[i].getLength() + 1 <= this.maxCharsInLine) {
				lastLine.appendWord(this.words[i]);
			} else {
				const newLine = new WordLine();
				newLine.appendWord(this.words[i]);
				this.lines.push(newLine);
			}
		}
	}
}

export class WordLine {
	words: Word[] = [];

	getLength(): number {
		let result = 0;
		this.words.forEach((word: Word) => result += word.getLength());

		return result;
	}

	appendWord(word: Word): void {
		this.words.push(word);
	}
}
