import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Champion } from 'src/app/interfaces/champion';
import { ChampionsService } from 'src/app/services/champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css'],
})
export class ChampionsComponent implements OnInit {
  public champions: any;
  public loading = true;
  public champion: any;
  public cham: any;

  constructor(
    private championsServices: ChampionsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getChampions();
  }

  getChampions(): void {
    this.championsServices.getChampions().subscribe((resp) => {
      this.champions = Object.values(resp);
      this.loading = false;
    });
  }

  openLg(content: any, champion: any) {
    this.modalService.open(content, { size: 'lg', centered: true } );

    this.championsServices.getChampion(champion)
      .subscribe((resp: Champion) => {
        this.champion = Object.values(resp)[0].skins;
        this.cham = Object.values(resp)[0].id;

        console.log(Object.values(resp)[0].skins);
      });
  }


}
