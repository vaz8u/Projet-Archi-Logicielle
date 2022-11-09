import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmeModule } from '../alarme/alarme.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CalculModule {
  public alarme: any;
  public tempsTrajet: number;

//Calcul de l’heure de l’alarme
// = heure début du cours - (temps de trajet + temps pour réveil + temps d'arrivée)
  constructor(private alarm: any) {
    this.alarme = alarm;
  }

  calculer(){
    return this.alarme.debutCours-(this.tempsTrajet+this.alarme.tempsReveil+this.alarme.tempsArrivee);
 }
}
