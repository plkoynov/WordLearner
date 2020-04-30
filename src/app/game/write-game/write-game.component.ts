import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WriteGameMode } from '../enums/write-game-mode.enum';

@Component({
	selector: 'app-write-game',
	templateUrl: './write-game.component.html',
	styleUrls: ['./write-game.component.css']
})
export class WriteGameComponent {
	title: string;
	allowPositionChange = false;
	mode = WriteGameMode.easy;

	gameModes = WriteGameMode;

	constructor(
		private router: Router
	) { }

	startGame() {
		this.router.navigate(['write', `${WriteGameMode[this.mode]}`],
			{
				state: {
					title: this.title,
					allowPositionChange: this.allowPositionChange
				}
			});
	}
}
