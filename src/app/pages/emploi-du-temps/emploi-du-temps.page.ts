/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emploi-du-temps',
  templateUrl: './emploi-du-temps.page.html',
  styleUrls: ['./emploi-du-temps.page.scss'],
})
export class EmploiDuTempsPage implements OnInit {
  public heures: number;
  public minutes: number;
  public temps: {
    heures: number;
    minutes: number;
  }[] = [];

  constructor() { }

  ngOnInit() {
  }

  ajouter_edt(){
    // TODO
  }

  ajouter_heure(){
    this.temps.push({heures:this.heures, minutes:this.minutes});
  }

  supprimer_heure(temp: any){
    this.temps.splice(this.temps.indexOf(temp), 1);
  }

}
