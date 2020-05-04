import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SettingFileItem } from 'src/app/models/setting-file-item.model';

@Component({
	selector: 'app-game-result',
	templateUrl: './game-result.component.html',
	styleUrls: ['./game-result.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameResultComponent {
	answers: { right: SettingFileItem[], wrong: SettingFileItem[] };
	result: number;

	@Input('answers') set answersSetter(value: { right: SettingFileItem[], wrong: SettingFileItem[] }) {
		this.answers = value;

		const percentage = (this.answers.right.length / (this.answers.right.length + this.answers.wrong.length)) * 100;
		if (isNaN(percentage) || !isFinite(percentage)) {
			this.result = 0;
		} else {
			this.result = parseInt(percentage.toFixed(0), 10);
		}
	}
}
