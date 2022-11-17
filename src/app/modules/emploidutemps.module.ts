/* eslint-disable @angular-eslint/contextual-lifecycle */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import {appInjector} from '../app.module';
import {CommonModule} from '@angular/common';
import {emplois} from '../../data/emploi-du-temps';
import {Storage} from '@ionic/storage-angular';

const storage = appInjector.get(Storage);
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class EmploiDuTempsModule implements OnInit {
  private static instance: EmploiDuTempsModule;

  public heures: number;
  public minutes: number;
  public temps: {
    heures: number;
    minutes: number;
  }[] = [];

private constructor() { }
  ngOnInit()  {
  }


  public static getInstance(): EmploiDuTempsModule {
    if (!EmploiDuTempsModule.instance) {
        EmploiDuTempsModule.instance = new EmploiDuTempsModule();
    }
    return EmploiDuTempsModule.instance;
  }



  ajouter_edt(){
    // TODO
  }

  ajouter_heure(){
    this.temps.push({heures:this.heures, minutes:this.minutes});
    this.stocker();
  }

  private stocker() {
    // sauvegarde des alarmes du fichier dans le stockage.
    storage.set('mesheures', this.temps).then(r => {
      // chargement des alarmes dans le stockage.
      storage.get('mesheures').then((val) => {
        console.log('Les alarmes du storage sont :', val);
      });
    });
  }

  supprimer_heure(temp: any){
    this.temps.splice(this.temps.indexOf(temp), 1);
  }

}
