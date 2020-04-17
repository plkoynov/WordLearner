import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SettingFileItem } from 'src/app/models/setting-file-item.model';

@Component({
	selector: 'app-game-result',
	templateUrl: './game-result.component.html',
	styleUrls: ['./game-result.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameResultComponent {
	@Input() answers: { right: SettingFileItem, wrong: SettingFileItem };
}
