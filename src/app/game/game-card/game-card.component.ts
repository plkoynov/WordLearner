import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SettingFileItem } from 'src/app/models/setting-file-item.model';

@Component({
	selector: 'app-game-card',
	templateUrl: './game-card.component.html',
	styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
	isFlipped = false;

	model: SettingFileItem;
	@Input('model') set modelSetter(value: SettingFileItem) {
		if (!value) {
			return;
		}

		const timeout = this.isFlipped ? 300 : 0;
		setTimeout(() => this.model = value, timeout);
		this.isFlipped = false;
	}

	@Output() answerSelected: EventEmitter<boolean> = new EventEmitter();

	selectAnswer(isCorrect: boolean): void {
		this.answerSelected.emit(isCorrect);
	}
}
