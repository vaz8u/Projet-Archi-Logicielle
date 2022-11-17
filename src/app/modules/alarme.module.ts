import {NgModule} from '@angular/core';
import {appInjector} from '../app.module';
import {CommonModule} from '@angular/common';
import {ALARMES} from '../../data/alarmes';
import {Storage} from '@ionic/storage-angular';

const storage = appInjector.get(Storage);

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
    // sauvegarde des alarmes du fichier dans le stockage.
    storage.set('mesalarmes', this.alarmes);

    // chargement des alarmes dans le stockage.
    storage.get('mesalarmes').then((val) => {
      console.log('Le json de mes alarmes est', val);
    });
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
      nom: 'Alarme ' + this.id,
      heure: '8:00',
      allume: 'false',
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
