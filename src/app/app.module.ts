import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameCardComponent } from './game/game-card/game-card.component';
import { GameResultComponent } from './game/game-result/game-result.component';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { LocalStorageService } from './services/local-storage.service';
import { SettingsComponent } from './settings/settings.component';
import { GameTitleSelectComponent } from './game/game-title-select/game-title-select.component';
import { SettingsEditComponent } from './settings/settings-edit/settings-edit.component';

@NgModule({
	declarations: [
		AppComponent,
		SettingsComponent,
		GameComponent,
		MenuComponent,
		GameCardComponent,
		GameResultComponent,
		GameTitleSelectComponent,
		SettingsEditComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [
		LocalStorageService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
