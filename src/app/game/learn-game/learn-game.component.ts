import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/constants/routes.constant';
import { LocalStorageService } from '../../services/local-storage.service';
import { RandomService } from '../../services/random.service';
import { LearnGameDto } from '../dtos/learn-game.dto';
import { GameBaseComponent } from '../game-base/game-base.component';

@Component({
  selector: 'app-learn-game',
  templateUrl: './learn-game.component.html',
  styleUrls: ['./learn-game.component.css'],
})
export class LearnGameComponent
  extends GameBaseComponent
  implements OnInit, OnDestroy {
  game: LearnGameDto;

  constructor(
    private location: Location,
    private localStorageService: LocalStorageService,
    private randomService: RandomService,
    protected router: Router,
  ) {
    super(router);
  }

  ngOnInit() {
    const state = this.location.getState() as any;
    if (state && state.settings) {
      this.game = new LearnGameDto(this.localStorageService, this.randomService);
      this.game.init(state.settings);

      this.subscribeToGameOver(this.game);
    } else {
      this.router.navigate([ROUTES.LEARN.SETTINGS]);
    }
  }
}
