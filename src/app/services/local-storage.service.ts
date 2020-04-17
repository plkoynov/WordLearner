import { Injectable } from '@angular/core';
import { SettingFile } from '../models/setting-file.model';

@Injectable()
export class LocalStorageService {
	private localStoragePath = 'settingFiles';

	getAll(): SettingFile[] {
		return JSON.parse(localStorage.getItem(this.localStoragePath)) as SettingFile[] || [];
	}

	get(title: string): SettingFile | null {
		const files = this.getAll();
		const file = files.filter(e => e.title === title);
		if (!file || !file.length) {
			return null;
		}

		return file[0];
	}

	save(model: SettingFile): void {
		let files = this.getAll();
		if (!files) {
			files = [];
		}

		const existingFileIndex = files.findIndex(e => e.title === model.title);
		if (existingFileIndex >= 0) {
			files[existingFileIndex] = model;
		} else {
			files.push(model);
		}

		localStorage.setItem(this.localStoragePath, JSON.stringify(files));
	}

	delete(title: string): void {
		const files = this.getAll();
		const existingFileIndex = files.findIndex(e => e.title === title);
		if (existingFileIndex >= 0) {
			files.splice(existingFileIndex, 1);
		}

		localStorage.setItem(this.localStoragePath, JSON.stringify(files));
	}
}
