import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private _http: HttpClient
  ) { }

  getItems() {
    return this._http.get(`${environment.URL_BASE}/12.3.1/data/es_ES/item.json`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
