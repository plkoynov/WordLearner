import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RandomService } from 'src/app/services/random.service';
import { WriteGameEasyDto } from '../dtos/write-game-easy.dto';

@Component({
	selector: 'app-write-game-easy',
	templateUrl: './write-game-easy.component.html',
	styleUrls: ['./write-game-easy.component.css']
})
export class WriteGameEasyComponent implements OnInit {
	game: WriteGameEasyDto;

	constructor(
		private location: Location,
		private localStorageService: LocalStorageService,
		private randomService: RandomService,
		private router: Router
	) { }

	ngOnInit() {
		const state = this.location.getState() as any;
		if (state && state.settings) {
			this.game = new WriteGameEasyDto(this.localStorageService, this.randomService);
			this.game.init(state.settings);
			this.game.initBoxes();
		} else {
			this.router.navigate(['write']);
		}
	}

	boxValueChanged(box: { index: number, value: string }, value: string) {
		if (value && value.length > 1) {
			box.value = value.substr(0, 1);
		} else {
			box.value = value;
		}
	}
}
