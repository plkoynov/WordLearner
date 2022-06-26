import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from 'src/app/constants/routes.constant';
import { GameSettingsComponent } from './game-settings.component';

@Component({
  selector: 'app-learn-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css'],
})
export class LearnGameSettingsComponent extends GameSettingsComponent {
  hasGameModes = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    super();
  }

  startGame() {
    this.router.navigate([ROUTES.LEARN.GAME],
      {
        relativeTo: this.route,
        state: {
          settings: this.settings,
        },
      });
  }
}
