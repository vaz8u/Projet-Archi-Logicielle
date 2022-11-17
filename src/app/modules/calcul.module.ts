import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmeModule } from './alarme.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class CalculModule {
// Calcul de l’heure de l’alarme
// = heure début du cours - (temps de trajet + temps pour réveil + temps d'arrivée)
  constructor() {
  }

  calculer(debutCoursH: number,debutCoursM: number, tempsTrajet: number, tempsArrivee: number, tempsReveil: number) {
    let res = (tempsTrajet+tempsReveil+tempsArrivee);
    if (res > 60 ){
      debutCoursH = debutCoursH - 1;
    }
    res = debutCoursM - (res-60);
    console.log(res);
    return debutCoursH+':'+ res;
  }
 }

