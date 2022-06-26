import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROUTES } from '../constants/routes.constant';
import { MenuItem } from '../models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { routerLink: ROUTES.LEARN.SETTINGS, icon: 'icon-education', title: 'Учете' },
    { routerLink: ROUTES.WRITE.SETTINGS, icon: 'icon-pencil2', title: 'Пишете' },
    { routerLink: ROUTES.SETTINGS.LIST, icon: 'icon-cog', title: 'Настройки' },
    { routerLink: ROUTES.SETTINGS.LIST, icon: 'icon-info', title: 'Помощ' },
  ];
}
