import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameMode } from '../enums/game-mode.enum';
import { GameSettingsComponent } from './game-settings.component';

@Component({
  selector: 'app-write-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.css'],
})
export class WriteGameSettingsComponent extends GameSettingsComponent {
  hasGameModes = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    super();
  }

  startGame() {
    this.router.navigate([GameMode[this.gameMode]],
      {
        relativeTo: this.route,
        state: {
          settings: this.settings,
        },
      });
  }
}
