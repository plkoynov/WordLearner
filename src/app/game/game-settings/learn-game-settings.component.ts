import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  ) {
    super();
  }

  startGame() {
    this.router.navigate(['learn/game'],
      {
        state: {
          settings: this.settings,
        },
      });
  }
}
