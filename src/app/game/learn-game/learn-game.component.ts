import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { RandomService } from '../../services/random.service';
import { LearnGameDto } from '../dtos/learn-game.dto';

@Component({
  selector: 'app-learn-game',
  templateUrl: './learn-game.component.html',
  styleUrls: ['./learn-game.component.css'],
})
export class LearnGameComponent implements OnInit {
  game: LearnGameDto;

  constructor(
    private location: Location,
    private localStorageService: LocalStorageService,
    private randomService: RandomService,
    private router: Router,
  ) { }

  ngOnInit() {
    const state = this.location.getState() as any;
    if (state && state.settings) {
      this.game = new LearnGameDto(this.localStorageService, this.randomService);
      this.game.init(state.settings);
    } else {
      this.router.navigate(['learn']);
    }
  }
}
