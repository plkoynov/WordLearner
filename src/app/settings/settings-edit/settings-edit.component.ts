import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingFileItem } from 'src/app/models/setting-file-item.model';
import { SettingFile } from 'src/app/models/setting-file.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
	selector: 'app-settings-edit',
	templateUrl: './settings-edit.component.html',
	styleUrls: ['./settings-edit.component.css']
})
export class SettingsEditComponent implements OnInit {
	model = new SettingFile();
	selectedItem: SettingFileItem;

	private newItemNumber = 1;

	isEditingFront: boolean;
	isEditingBack: boolean;

	constructor(
		private location: Location,
		private storage: LocalStorageService,
		private router: Router
	) { }

	ngOnInit(): void {
		const state = this.location.getState() as any;
		if (state && state.title) {
			this.model = this.storage.get(state.title);
		}
	}

	addItem() {
		if (!this.model.items) {
			this.model.items = [];
		}

		const newItem = new SettingFileItem();
		newItem.front = `Нов елемент ${this.newItemNumber}`;
		newItem.back = `Нов елемент ${this.newItemNumber}`;
		this.model.items.unshift(newItem);

		this.newItemNumber++;
	}

	save(): void {
		if (this.model.title && this.model.items && this.model.items.length) {
			this.storage.save(this.model);
		}

		this.router.navigate(['settings']);
	}

	select(item: SettingFileItem): void {
		this.selectedItem = item;
	}

	delete(item: SettingFileItem): void {
		const index = this.model.items.indexOf(item);
		const indexOfSelectedItem = this.model.items.indexOf(this.selectedItem);
		if (index === indexOfSelectedItem) {
			this.selectedItem = null;
		}

		this.model.items.splice(index, 1);
	}
}