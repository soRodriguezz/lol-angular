import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    DataTablesModule
  ],
  exports: [
    ItemsComponent
  ]
})
export class ItemsModule { }
