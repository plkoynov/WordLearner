import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameMode } from '../enums/game-mode.enum';
import { GameSettingsComponent } from './game-settings.component';

@Component({
	selector: 'app-write-game-settings',
	templateUrl: './game-settings.component.html',
	styleUrls: ['./game-settings.component.css']
})
export class WriteGameSettingsComponent extends GameSettingsComponent {
	hasGameModes = true;

	constructor(
		private router: Router
	) {
		super();
	}

	startGame() {
		this.router.navigate(['write', `${GameMode[this.gameMode]}`],
			{
				state: {
					settings: this.settings
				}
			});
	}
}
