import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameSettingsDto } from '../dtos/game-settings.dto';

@Component({
	selector: 'app-learn-game-settings',
	templateUrl: './learn-game-settings.component.html',
	styleUrls: ['./learn-game-settings.component.css']
})
export class LearnGameSettingsComponent {
	settings: GameSettingsDto = new GameSettingsDto();

	constructor(
		private router: Router
	) { }

	startGame() {
		this.router.navigate(['learn/game'],
			{
				state: {
					settings: this.settings
				}
			});
	}
}
