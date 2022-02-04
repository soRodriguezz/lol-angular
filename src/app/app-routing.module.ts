import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'skins',
    loadChildren: () =>
      import('./components/skins/skins.module').then((m) => m.ChampionsModule),
  },
  {
    path: 'champions',
    loadChildren: () =>
      import('./components/champions/champions.module').then(
        (m) => m.ChampionsModule
      ),
  },
  {
    path: 'items',
    loadChildren: () =>
      import('./components/items/items.module').then((m) => m.ItemsModule),
  },
  {
    path: '**',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
