import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SettingFile } from 'src/app/models/setting-file.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
	selector: 'app-game-title-select',
	templateUrl: './game-title-select.component.html',
	styleUrls: ['./game-title-select.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameTitleSelectComponent implements OnInit {
	selectedTitle: string;
	titles: string[] = [];

	@Output() titleSelected: EventEmitter<string> = new EventEmitter();

	constructor(private localStorageService: LocalStorageService) { }

	ngOnInit(): void {
		this.titles = this.localStorageService.getAll().map((file: SettingFile) => file.title);
		if (this.titles.length === 1) {
			this.titleSelected.emit(this.titles[0]);
		}
	}
}
