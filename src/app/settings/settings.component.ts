import { Component, OnInit } from '@angular/core';
import { SettingFile } from '../models/setting-file.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
	settingFilesTitles: string[] = [];

	constructor(
		private localStorageService: LocalStorageService
	) { }

	ngOnInit() {
		this.load();
	}

	handleFileInput(fileList: FileList) {
		if (!fileList || !fileList.length) {
			return;
		}

		const file = fileList.item(0);
		file.text()
			.then((result: string) => {
				const json = JSON.parse(result) as SettingFile;
				this.localStorageService.save(json);
				this.load();
			});
	}

	delete(title: string) {
		this.localStorageService.delete(title);
		this.load();
	}

	preview(title: string) {
		const file = this.localStorageService.get(title);
		if (file) {
			const x = window.open();
			x.document.open();
			x.document.write(`<html><body>${JSON.stringify(file)}</body></html>`);
			x.document.close();
		}
	}

	private load() {
		this.settingFilesTitles = this.localStorageService.getAll()
			.map((file: SettingFile) => file.title);
	}
}
