/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { apiLocalisation } from 'src/app/services/api/apiLocalisation';
import { ApiTrajet } from 'src/app/services/api/apiTrajet';
import {CommonModule} from '@angular/common';
import {emplois} from '../../../data/emploi-du-temps';
import {Storage} from '@ionic/storage-angular';
import {EmploiDuTempsModule} from '../../modules/emploidutemps.module';
import {TrajetsModule} from '../../modules/trajets.module';
import { appInjector } from 'src/app/app.module';
const storage = appInjector.get(Storage);

@Component({
  selector: 'app-lieux-de-travail',
  templateUrl: './lieux-de-travail.page.html',
  styleUrls: ['./lieux-de-travail.page.scss'],
})
export class LieuxDeTravailPage implements OnInit {
    public nom: string;
    public rue: string;
    public nrue: string;
    public ville: string;
    public id = 0;

    public traffic = 5;

    public dataGPS: any;
    public trouve: false;

    public estDemande = false;

    public lieux: {
    id: number;
    nom: string;
    rue: string;
    nrue: string;
    ville: string;
    }[] = [];

    public trajets = TrajetsModule.getInstance();

    public depart: number;
    public arrivee: number;

  constructor(private localisation: apiLocalisation) { }

  ngOnInit() {
  }

  ajouter_lieu(){
    this.lieux.push({id:this.id++, nom:this.nom, rue:this.rue, nrue:this.nrue, ville:this.ville});
  }
  async ajouter_trajet(){
    const Ndepart = this.lieux[this.depart];
    const Narrivee = this.lieux[this.arrivee];
    const i = new ApiTrajet();
    await i.trajet(Ndepart, Narrivee);
    this.trajets.ajouter_trajet(Ndepart, Narrivee, this.traffic+Math.round((i.time/100)* 100)/100, Math.round((i.distance/1000)*100)/100);
  }

  async ajouter_lieu2(){
    this.estDemande = true;
    // initialisation
    this.rue = undefined;
    this.nrue = undefined;
    this.ville = undefined;
    // requête
    await this.localisation.checkPermission();
    // Si elle echoue
    if (this.localisation.ok === false) {
      this.estDemande = false;
    }
    // Récup des données
    await this.setData(this.localisation.dataGPS);
    console.log(this.dataGPS);
    // Attribution des données
    this.rue = `${this.dataGPS.features[0].properties.street}`;
    this.nrue = `${this.dataGPS.features[0].properties.housenumber}`;
    this.ville = `${this.dataGPS.features[0].properties.city}, ${this.dataGPS.features[0].properties.postcode}`;
    this.estDemande = false;
  }
  async setData(data: any) {
    this.dataGPS = data;
  }


  supprimer_lieu(lieu: any){
    this.lieux.splice(this.lieux.indexOf(lieu), 1);
  }
}
