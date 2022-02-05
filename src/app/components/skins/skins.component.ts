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
  public loadingModal = true;

  constructor(
    private championsServices: ChampionsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getChampions();
  }

  private getChampions(): void {
    this.championsServices.getChampions().subscribe((resp) => {
      this.champions = Object.values(resp);
      this.loading = false;
    });
  }

  public abrirModal(content: any, champion: any): void {
    this.modalService.open(content, { size: 'lg', centered: true } );
    this.champion = '';
    this.loadingModal = true;
    this.championsServices.getChampion(champion)
      .subscribe((resp: Champion) => {
        this.loadingModal = false;
        this.champion = Object.values(resp)[0].skins;
        this.cham = Object.values(resp)[0].id;
      });
  }

}
