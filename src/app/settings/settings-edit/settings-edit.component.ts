import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SettingFileItem } from 'src/app/models/setting-file-item.model';
import { SettingFile } from 'src/app/models/setting-file.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-settings-edit',
  templateUrl: './settings-edit.component.html',
  styleUrls: ['./settings-edit.component.css'],
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
    private router: Router,
    private sanitizer: DomSanitizer,
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

    const newItem = new SettingFileItem(
      `Нов елемент ${this.newItemNumber}`,
      `Нов елемент ${this.newItemNumber}`,
    );
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

  getFileUrl(): SafeUrl {
    const json = JSON.stringify(this.model);
    return this.sanitizer.bypassSecurityTrustUrl(`data:text/json;charset=UTF-8,${encodeURIComponent(json)}`);
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
