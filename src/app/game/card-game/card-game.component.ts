import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { RandomService } from '../../services/random.service';
import { CardGameDto } from '../dtos/card-game.dto';

@Component({
	selector: 'app-card-game',
	templateUrl: './card-game.component.html',
	styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {
	game: CardGameDto;

	constructor(
		private localStorageService: LocalStorageService,
		private randomService: RandomService
	) { }

	ngOnInit() {
		this.game = new CardGameDto(this.localStorageService, this.randomService);
	}
}
