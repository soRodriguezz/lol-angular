import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChampionsService } from 'src/app/services/champions.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css'],
})
export class ChampionsComponent {
  public champion: any;
  public loading!: boolean;
  public hiddenChamp = true;
  public hiddenAlert = false;
  public statusError!: string;
  public tipoChamp: any;

  public champForm: FormGroup = this._fb.group({
    champ: ['', [Validators.required]],
  });

  constructor(
    private championsService: ChampionsService,
    private _fb: FormBuilder
  ) {}

  public buscarCampeon(): void {
    this.loading = true;
    this.hiddenAlert = false;

    this.championsService.getChampion(this.capitalizarChamp()).subscribe({
      next: (resp: any) => {
        this.loading = false;
        this.hiddenChamp = false;
        this.hiddenAlert = false;
        this.champion = Object.values(resp)[0];
        this.tipoChamp = this.champion.tags;
        console.log(this.tipoChamp);
        console.log(this.champion);
      },
      error: (error: any) => {
        this.loading = false;
        this.hiddenChamp = true;
        this.hiddenAlert = true;
        this.statusError = error.status;
      },
    });
  }

  public ocutarAlert(tecla: any): void {
    if (tecla.key !== 'Enter') {
      this.hiddenAlert = false;
    }
  }

  private capitalizarChamp(): string {
    return (
      this.champForm.controls['champ'].value.charAt(0).toUpperCase() +
      this.champForm.controls['champ'].value.slice(1)
    );
  }
}
