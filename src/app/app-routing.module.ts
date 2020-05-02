import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnGameSettingsComponent } from './game/learn-game-settings/learn-game-settings.component';
import { LearnGameComponent } from './game/learn-game/learn-game.component';
import { WriteGameEasyComponent } from './game/write-game-easy/write-game-easy.component';
import { WriteGameHardComponent } from './game/write-game-hard/write-game-hard.component';
import { WriteGameComponent } from './game/write-game/write-game.component';
import { MenuComponent } from './menu/menu.component';
import { SettingsEditComponent } from './settings/settings-edit/settings-edit.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
	{
		path: '',
		component: MenuComponent
	},
	{
		path: 'learn',
		children: [
			{
				path: '',
				component: LearnGameSettingsComponent
			},
			{
				path: 'game',
				component: LearnGameComponent
			}
		]
	},
	{
		path: 'write',
		children: [
			{
				path: '',
				component: WriteGameComponent
			},
			{
				path: 'easy',
				component: WriteGameEasyComponent
			},
			{
				path: 'hard',
				component: WriteGameHardComponent
			}
		]
	},
	{
		path: 'settings',
		children: [
			{
				path: '',
				component: SettingsComponent
			},
			{
				path: 'edit',
				component: SettingsEditComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
