import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import packageJson from './../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private defaultTitle = 'Учи лесно, докато се забавляваш';

  version = packageJson.version;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map(() => this.getTitleFromRoute(this.activatedRoute)),
      )
      .subscribe((title: string) => this.titleService.setTitle(title));
  }

  private getTitleFromRoute(route: ActivatedRoute): string {
    let title = '';

    let child = route.firstChild;
    while (child) {
      if (child.snapshot.data && child.snapshot.data.title) {
        if (title !== '') {
          title = `${title} / ${child.snapshot.data.title}`; 
        } else {
          title = child.snapshot.data.title;
        }
      }

      child = child.firstChild;
    }

    return title !== '' ? title : this.defaultTitle;
  }
}
