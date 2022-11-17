/* eslint-disable max-len */
// Api Trajet
// Utilisé pour définir le trajet
// Parametres:
//  pts: Point de départ du trajet, intermédiaires et d'arrivée
//  nb : Nombre de points
//  mode: Mode de transport
//  unit: unité de distance
//  tour: Si le trajet est un tour
//  key : Clé d'API

/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiTrajet {
  public result: any;
  public depart: string;
  public arrivee: any;
  public aux: any;
  public time: any;
  public distance: any;

  public async adresseToCoords(nrue: string, rue: string, ville: string){
    console.log('adresseToCoords');
    const requestOptions = {
      method: 'GET',
    };
    const adresse = nrue+' '+rue+','+ville+',France';
    const key='d6c8336b03964237aa991eda3329199d';
    await fetch(`https://api.geoapify.com/v1/geocode/search?text=${adresse}&format=json&apiKey=${key}`,requestOptions)
        .then(async (response) => await response.json())
        .then(async (data) => {
          this.aux = data;
          console.log(data);
        });
  }

  public async trajet(depart: any, arrivee: any){
    let lat: string;
    let long: string;
    await this.adresseToCoords(depart.nrue, depart.rue, depart.ville);
    lat = this.aux.results[0].lat;
    lat = lat.toString().substring(0,10);
    long = this.aux.results[0].lon;
    long = long.toString().substring(0,10);
    this.depart = lat+','+long;
    await this.adresseToCoords(arrivee.nrue, arrivee.rue, arrivee.ville);
    lat = this.aux.results[0].lat;
    lat = lat.toString().substring(0,10);
    long = this.aux.results[0].lon;
    long = long.toString().substring(0,10);
    this.arrivee = lat+','+long;
    await this.apiTrajet();
    this.distance = this.result.total_distance;
    this.time = this.result.total_time;
  }

    public async apiTrajet(){
      console.log('apiTrajet : '+this.depart+' '+this.arrivee);
      const requestOptions = {
        method: 'GET',
      };
            const depart = this.depart;
            const dest   = this.arrivee;
            const mode   = 'driving';
            const key    = '877ef5742eba1d157f7732ae96892f88';
        await fetch(`https://maps.open-street.com/api/route/?origin=${depart}&destination=${dest}&mode=${mode}&key=${key}`,requestOptions)
        .then(async (response) => await response.json())
        .then(async (data) => {
          this.result = data;
          console.log(this.result);
        });
    }
}
