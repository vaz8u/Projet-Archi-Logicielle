/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import {appInjector} from '../../app.module';
import {CommonModule} from '@angular/common';
import {emplois} from '../../../data/emploi-du-temps';
import {Storage} from '@ionic/storage-angular';
import {EmploiDuTempsModule} from '../../modules/emploidutemps.module';
const storage = appInjector.get(Storage);

@Component({
  selector: 'app-emploi-du-temps',
  templateUrl: './emploi-du-temps.page.html',
  styleUrls: ['./emploi-du-temps.page.scss'],
})

export class EmploiDuTempsPage implements OnInit {
  public heures: number;
  public minutes: number;
  public temps = EmploiDuTempsModule.getInstance();
  constructor() { }

  async ngOnInit() {
    await storage.create();

    }

  ajouter_edt(){
    // TODO
  }

  ajouter_heure(){
    this.temps.ajouter_heure(this.heures, this.minutes);
  }

  supprimer_heure(temp: any){
    //this.temps.splice(this.temps.indexOf(temp), 1);
  }

}
