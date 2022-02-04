import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionsRoutingModule } from './skins-routing.module';
import { ChampionsComponent } from './skins.component';


@NgModule({
  declarations: [
    ChampionsComponent
  ],
  imports: [
    CommonModule,
    ChampionsRoutingModule
  ]
})
export class ChampionsModule { }
