import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { RandomService } from '../services/random.service';
import { GameDto } from './dtos/game.dto';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
	game: GameDto;

	constructor(
		private localStorageService: LocalStorageService,
		private randomService: RandomService
	) { }

	ngOnInit() {
		this.game = new GameDto(this.localStorageService, this.randomService);
	}
}
