import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
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
		component: GameComponent
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
