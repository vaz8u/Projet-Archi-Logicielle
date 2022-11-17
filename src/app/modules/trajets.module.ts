/* eslint-disable @angular-eslint/contextual-lifecycle */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import {appInjector} from '../app.module';
import {CommonModule} from '@angular/common';
import {Storage} from '@ionic/storage-angular';

const storage = appInjector.get(Storage);
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class TrajetsModule implements OnInit {
  private static instance: TrajetsModule;

  public trajets: {
    depart: {
      id: number;
      nom: string;
      rue: string;
      nrue: string;
      ville: string;
      };
    arrivee: {
      id: number;
      nom: string;
      rue: string;
      nrue: string;
      ville: string;
      };
      temps: number;
      distance: number;
  }[] = [];

private constructor() { }
  ngOnInit()  {
  }

  init() {
    storage.get('mestrajets').then((val) => {
        this.trajets = val;
      this.stocker();
    });
  }


  public static getInstance(): TrajetsModule {
    if (!TrajetsModule.instance) {
        TrajetsModule.instance = new TrajetsModule();
    }
    return TrajetsModule.instance;
  }



  ajouter_edt(){
    // TODO
  }

  ajouter_trajet(depart_,arrivee_,heure_,minute_){
    this.trajets.push({depart:depart_,arrivee:arrivee_, temps:heure_, distance:minute_});
    this.stocker();
  }

  private stocker() {
    // sauvegarde des alarmes du fichier dans le stockage.
    storage.set('mestrajets', this.trajets).then(r => {
      // chargement des alarmes dans le stockage.
      storage.get('mestrajets').then((val) => {
        console.log('Les alarmes du storage sont :', val);
      });
    });
  }

}
