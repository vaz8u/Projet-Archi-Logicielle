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
  private static instance: AlarmeModule;

  public id = 0;
  public alarmes: {
    heure: string;
    emploiDuTemps: string;
    tempsArrivee: string;
    tempsReveil: string;
    allume: boolean;
    jours: string;
    debutCours: string;
    lieuArrivee: string;
    id: number;
    lieuDepart: string;
    nom: string;
  }[] = [];

  private constructor() { }

  public static getInstance(): AlarmeModule {
    if (!AlarmeModule.instance) {
      AlarmeModule.instance = new AlarmeModule();
    }

    return AlarmeModule.instance;
  }

  public toggleAlarme(id: number) {
    this.getAlarme(id).allume = !this.getAlarme(id).allume;
    this.stocker();
  }

  initAlarme() {
    storage.get('mesalarmes').then((val) => {
      if (val.length === 0) {
        this.alarmes = ALARMES;
      } else {
        this.alarmes = val;
      }
      this.id = this.alarmes[this.alarmes.length - 1].id + 1;

      this.stocker();
    });
  }

  getAlarmes() {
    this.stocker();
    return this.alarmes;
  }

  getAlarme(id: number) {
    return this.alarmes.find(alarme => alarme.id === id);
  }

  sample() {
    return {
      id: this.id++,
      nom: 'Alarme ' + this.id,
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
    this.stocker();
  }

  removeAlarme(idAlarme: number) {
    console.log('id de l\'alarme a succ', idAlarme);
    this.alarmes = this.alarmes.filter(alarme => alarme.id !== idAlarme);
    this.stocker();
  }

  private stocker() {
    // sauvegarde des alarmes du fichier dans le stockage.
    storage.set('mesalarmes', this.alarmes).then(r => {
      // chargement des alarmes dans le stockage.
      storage.get('mesalarmes').then((val) => {
        console.log('Les alarmes du storage sont :', val);
      });
      console.log('Les alarmes du json sont :', this.alarmes);
    });

  }

}
