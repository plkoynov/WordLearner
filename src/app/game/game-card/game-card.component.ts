import { Component, Input } from '@angular/core';
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

	@Input() isFlipEnabled = true;

	flip() {
		if (!this.isFlipEnabled) {
			return;
		}

		this.isFlipped = !this.isFlipped;
	}
}
