import { GameSettingsDto } from '../dtos/game-settings.dto';
import { GameMode } from '../enums/game-mode.enum';

export abstract class GameSettingsComponent {
  settings = new GameSettingsDto();

  abstract hasGameModes;

  gameModes = GameMode;

  gameMode = GameMode.easy;

  abstract startGame(): void;
}
