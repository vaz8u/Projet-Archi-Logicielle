import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ALARMES} from '../../data/alarmes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AlarmeModule {
  public id = 0;
  public alarmes: {
    heure: string;
    emploiDuTemps: string;
    tempsArrivee: string;
    tempsReveil: string;
    allume: string;
    jours: string;
    debutCours: string;
    lieuArrivee: string;
    id: string;
    lieuDepart: string;
    nom: string;
  }[] = [];

  initAlarme() {
    this.alarmes = ALARMES;
  }

  getAlarmes() {
    return this.alarmes;
  }

  getAlarme(id: string) {
    return this.alarmes[id];
  }

  sample() {
    return {
      id: this.id++,
      nom: 'Alarme 1',
      heure: '8:00',
      allume: false,
      jours: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      emploiDuTemps: '',
      debutCours: '',
      tempsReveil: '',
      tempsArrivee: '',
      lieuDepart: '',
      lieuArrivee: ''
    };
  }

  addAlarme(alarme: any) {
    this.alarmes.push(alarme);
  }

  removeAlarme(idAlarme: number) {
    this.alarmes.splice(idAlarme, 1);
  }

}
