import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Champions } from '../interfaces/champions';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(
    private _http: HttpClient
  ) { }

  getChampions(): Observable<Champions> {
    return this._http.get<Champions>(`${environment.URL_BASE}/12.3.1/data/es_ES/champion.json`)
      .pipe(
        map((data: any) => {
          return data.data;
        })
      );
  }

  getChampion(champ: string){
    return this._http.get(`${environment.URL_BASE}/12.3.1/data/es_ES/champion/${champ}.json`)
      .pipe(
        map((data: any) => {
          return data.data;
        })
      );
  }
}
