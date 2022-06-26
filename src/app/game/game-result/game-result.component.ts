import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingFileItem } from 'src/app/models/setting-file-item.model';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameResultComponent implements OnInit {
  answers: { right: SettingFileItem[], wrong: SettingFileItem[] };
  result: number;

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    const state = this.location.getState() as any;
    if (state && state.answers) {
      this.answers = state.answers;

      const percentage = (this.answers.right.length / (this.answers.right.length + this.answers.wrong.length)) * 100;
      if (isNaN(percentage) || !isFinite(percentage)) {
        this.result = 0;
      } else {
        this.result = parseInt(percentage.toFixed(0), 10);
      }
    } else {
      this.router.navigate(['']);
    }
  }
}
