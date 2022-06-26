import { Directive, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ROUTES } from 'src/app/constants/routes.constant';
import { GameDto } from '../dtos/game.dto';

@Directive()
export class GameBaseComponent implements OnDestroy {
  protected subs: Subscription[] = [];

  constructor(
    protected router: Router
  ) { }

  ngOnDestroy(): void {
    this.subs.forEach((sub: Subscription) => {
      if (!sub.closed) {
        sub.unsubscribe();
      }
    });
  }

  protected subscribeToGameOver(game: GameDto) {
    this.subs.push(
      game.gameOver
        .subscribe(() => this.router.navigate([ROUTES.RESULT],
          {
            state: {
              answers: game.answers,
            },
          }
        ))
    );
  }
}