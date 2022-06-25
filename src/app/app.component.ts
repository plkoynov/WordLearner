import { Component } from '@angular/core';
import packageJson from './../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WordHelper';
  version = packageJson.version;
}
