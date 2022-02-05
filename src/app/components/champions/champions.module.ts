import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionsRoutingModule } from './champions-routing.module';
import { ChampionsComponent } from './champions.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChampionsComponent
  ],
  imports: [
    CommonModule,
    ChampionsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChampionsModule { }
