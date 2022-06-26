import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnGameSettingsComponent } from './game/game-settings/learn-game-settings.component';
import { WriteGameSettingsComponent } from './game/game-settings/write-game-settings.component';
import { LearnGameComponent } from './game/learn-game/learn-game.component';
import { WriteGameEasyComponent } from './game/write-game-easy/write-game-easy.component';
import { WriteGameHardComponent } from './game/write-game-hard/write-game-hard.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsEditComponent } from './settings/settings-edit/settings-edit.component';
import { SettingsComponent } from './settings/settings.component';
import { ROUTES } from './constants/routes.constant';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: ROUTES.LEARN.SETTINGS,
    data: {
      title: 'Учете',
    },
    children: [
      {
        path: '',
        component: LearnGameSettingsComponent,
        data: {
          title: 'Настройки',
        },
      },
      {
        path: ROUTES.LEARN.GAME,
        component: LearnGameComponent,
        data: {
          title: 'Игра',
        },
      },
    ],
  },
  {
    path: ROUTES.WRITE.SETTINGS,
    data: {
      title: 'Пишете',
    },
    children: [
      {
        path: '',
        component: WriteGameSettingsComponent,
        data: {
          title: 'Настройки',
        },
      },
      {
        path: ROUTES.WRITE.EASY_GAME,
        component: WriteGameEasyComponent,
        data: {
          title: 'Лесна игра',
        },
      },
      {
        path: ROUTES.WRITE.HARD_GAME,
        component: WriteGameHardComponent,
        data: {
          title: 'Трудна игра',
        },
      },
    ],
  },
  {
    path: ROUTES.SETTINGS.LIST,
    data: {
      title: 'Конфигурации',
    },
    children: [
      {
        path: '',
        component: SettingsComponent,
        data: {
          title: 'Преглед',
        },
      },
      {
        path: ROUTES.SETTINGS.EDIT,
        component: SettingsEditComponent,
        data: {
          title: 'Редакция',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
