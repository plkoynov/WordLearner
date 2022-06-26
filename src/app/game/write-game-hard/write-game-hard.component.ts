import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/constants/routes.constant';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RandomService } from 'src/app/services/random.service';
import { WriteGameHardDto } from '../dtos/write-game-hard.dto';
import { GameBaseComponent } from '../game-base/game-base.component';

@Component({
  selector: 'app-write-game-hard',
  templateUrl: './write-game-hard.component.html',
  styleUrls: ['./write-game-hard.component.css'],
})
export class WriteGameHardComponent
  extends GameBaseComponent
  implements OnInit {
  game: WriteGameHardDto;

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
      this.game = new WriteGameHardDto(this.localStorageService, this.randomService);
      this.game.init(state.settings);
      this.game.setup();

      this.subscribeToGameOver(this.game);
    } else {
      this.router.navigate([ROUTES.WRITE.SETTINGS]);
    }
  }
}
