import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgIconComponent } from './common/components/svg-icon.component';
import { GameCardComponent } from './game/game-card/game-card.component';
import { GameHeaderComponent } from './game/game-header/game-header.component';
import { GameResultComponent } from './game/game-result/game-result.component';
import { GameTitleSelectComponent } from './game/game-title-select/game-title-select.component';
import { LearnGameSettingsComponent } from './game/learn-game-settings/learn-game-settings.component';
import { LearnGameComponent } from './game/learn-game/learn-game.component';
import { WriteGameEasyComponent } from './game/write-game-easy/write-game-easy.component';
import { WriteGameHardComponent } from './game/write-game-hard/write-game-hard.component';
import { WriteGameComponent } from './game/write-game/write-game.component';
import { MenuComponent } from './menu/menu.component';
import { LocalStorageService } from './services/local-storage.service';
import { RandomService } from './services/random.service';
import { SettingsEditComponent } from './settings/settings-edit/settings-edit.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		GameCardComponent,
		GameHeaderComponent,
		GameResultComponent,
		GameTitleSelectComponent,
		LearnGameSettingsComponent,
		LearnGameComponent,
		WriteGameComponent,
		WriteGameEasyComponent,
		WriteGameHardComponent,
		SettingsComponent,
		SettingsEditComponent,
		SvgIconComponent
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
