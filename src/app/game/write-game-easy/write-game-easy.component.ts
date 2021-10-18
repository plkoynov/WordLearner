import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RandomService } from 'src/app/services/random.service';
import { LetterBox } from '../dtos/letter-box.dto';
import { Word } from '../dtos/word.dto';
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
			// todo: change length depending on the screen size
			this.game = new WriteGameEasyDto(12, this.localStorageService, this.randomService);
			this.game.init(state.settings);
			this.game.initWords();
		} else {
			this.router.navigate(['write']);
		}
	}

	letterBoxChanged(word: Word, box: LetterBox, newValue: LetterBox): void {
		const index = word.boxes.indexOf(box);
		word.boxes[index] = newValue;
	}
}
