import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { init } from './data';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AlarmeModule {
  public id = 0;
  public alarmes: {
    id: number;
    nom: string;
    heure: string;
    allume: boolean;
    jours: string[];
    emploiDuTemps: string;
    debutCours: string;
    tempsReveil: string;
    tempsArrivee: string;
    lieuDepart: string;
    lieuArrivee: string;
  }[] = [];

  initAlarme(){
   //TODO this.alarmes = init('alarme');
  }

 getAlarmes(){return this.alarmes;}

 getAlarme(id: string){
  return this.alarmes[id];
 }

 sample(){
  return {
    id : this.id++,
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
