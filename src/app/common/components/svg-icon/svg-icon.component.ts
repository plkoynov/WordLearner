import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-svg-icon',
	templateUrl: 'svg-icon.component.html',
	styleUrls: ['./svg-icon.styles.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class SvgIconComponent {
	@Input() iconName: string;
}
