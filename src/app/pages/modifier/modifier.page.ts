/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlarmeModule } from '../../modules/alarme.module';
import { CalculModule } from '../../modules/calcul.module';
import { LieuxDeTravailPage } from '../lieux-de-travail/lieux-de-travail.page';
import { EmploiDuTempsModule } from '../../modules/emploidutemps.module';
import { TrajetsModule } from 'src/app/modules/trajets.module';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {

  public alarme: any;
  public alarmeModule = AlarmeModule.getInstance();
  public calcul = new CalculModule();
  public emplacement: boolean;
  public heures: any;

  public emploiDuTemps = EmploiDuTempsModule.getInstance();
  public trajets = TrajetsModule.getInstance();

  public traj: any;
  public empl: any;

  public arriver: number;
  public reveil: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    console.log('id alarme a modif :', id);
    this.alarme = this.alarmeModule.alarmes.find(alarme => alarme.id === id);
    console.log('alarme a modif :', this.alarme);
  }

    // TODO: ajouter la fonction pour modifier l'alarme
  calculer(){
    console.log(this.empl.heures+' '+ this.empl.minutes +' '+this.traj.temps+' '+this.arriver+' '+this.reveil);
    this.alarme.heure = this.calcul.calculer(this.empl.heures, this.empl.minutes, this.traj.temps,this.arriver,this.reveil);
  }
}
