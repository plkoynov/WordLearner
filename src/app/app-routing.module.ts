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


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'learn',
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
        path: 'game',
        component: LearnGameComponent,
        data: {
          title: 'Игра',
        },
      },
    ],
  },
  {
    path: 'write',
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
        path: 'easy',
        component: WriteGameEasyComponent,
        data: {
          title: 'Лесна игра',
        },
      },
      {
        path: 'hard',
        component: WriteGameHardComponent,
        data: {
          title: 'Трудна игра',
        },
      },
    ],
  },
  {
    path: 'settings',
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
        path: 'edit',
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
