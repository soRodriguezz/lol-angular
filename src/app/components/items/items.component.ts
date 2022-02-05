import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  items: any;

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.opcionesDataTable();
    this.getItems();
  }

  private opcionesDataTable(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 15, 20],
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es-cl.json',
      },
    };
  }

  private getItems(): void {
    this.itemsService.getItems().subscribe((resp) => {
      this.items = Object.values(resp);
      this.dtTrigger.next(this.items);
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
