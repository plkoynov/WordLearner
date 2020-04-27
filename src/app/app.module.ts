import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgIconComponent } from './common/components/svg-icon.component';
import { CardGameComponent } from './game/card-game/card-game.component';
import { GameCardComponent } from './game/game-card/game-card.component';
import { GameResultComponent } from './game/game-result/game-result.component';
import { GameTitleSelectComponent } from './game/game-title-select/game-title-select.component';
import { WriteGameComponent } from './game/write-game/write-game.component';
import { MenuComponent } from './menu/menu.component';
import { LocalStorageService } from './services/local-storage.service';
import { RandomService } from './services/random.service';
import { SettingsEditComponent } from './settings/settings-edit/settings-edit.component';
import { SettingsComponent } from './settings/settings.component';
import { WriteGameEasyComponent } from './game/write-game-easy/write-game-easy.component';
import { WriteGameHardComponent } from './game/write-game-hard/write-game-hard.component';

@NgModule({
	declarations: [
		AppComponent,
		SettingsComponent,
		CardGameComponent,
		WriteGameComponent,
		MenuComponent,
		GameCardComponent,
		GameResultComponent,
		GameTitleSelectComponent,
		SettingsEditComponent,
		SvgIconComponent,
		WriteGameEasyComponent,
		WriteGameHardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [
		LocalStorageService,
		RandomService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
