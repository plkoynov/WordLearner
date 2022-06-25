import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GameDto } from '../dtos/game.dto';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameHeaderComponent {
  @Input() game: GameDto;
}
