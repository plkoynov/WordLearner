import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RandomService } from 'src/app/services/random.service';
import { WriteGameHardDto } from '../dtos/write-game-hard.dto';

@Component({
  selector: 'app-write-game-hard',
  templateUrl: './write-game-hard.component.html',
  styleUrls: ['./write-game-hard.component.css'],
})
export class WriteGameHardComponent implements OnInit {
  game: WriteGameHardDto;

  constructor(
    private location: Location,
    private localStorageService: LocalStorageService,
    private randomService: RandomService,
    private router: Router,
  ) { }

  ngOnInit() {
    const state = this.location.getState() as any;
    if (state && state.settings) {
      this.game = new WriteGameHardDto(this.localStorageService, this.randomService);
      this.game.init(state.settings);
      this.game.setup();
    } else {
      this.router.navigate(['write']);
    }
  }
}
