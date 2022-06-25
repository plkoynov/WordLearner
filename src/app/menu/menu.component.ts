import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  menuItems: { routerLink: string, icon: string, title: string }[] = [
    { routerLink: 'learn', icon: 'icon-education', title: 'Учете' },
    { routerLink: 'write', icon: 'icon-pencil2', title: 'Пишете' },
    { routerLink: 'settings', icon: 'icon-cog', title: 'Настройки' },
    { routerLink: 'settings', icon: 'icon-info', title: 'Помощ' },
  ];
}
