import { Component, OnInit } from '@angular/core';
import { AlarmeModule } from '../../modules/alarme.module';
@Component({
  selector: 'app-alarmes',
  templateUrl: './alarmes.page.html',
  styleUrls: ['./alarmes.page.scss'],
})
export class AlarmesPage implements OnInit {
  public alarme = new AlarmeModule();
  public modifier = '/modifier/';

  constructor() {
   }

  ngOnInit() {
     this.alarme.initAlarme();
  }

  supprimer(alarm){
    this.alarme.alarmes.forEach((element, index) => {
      if(element === alarm){
        this.alarme.alarmes.splice(index, 1);
      }
    });
  }

  allumer(alarm){
    alarm.alume = !alarm.alume;
  }

  ajouter(){
    this.alarme.addAlarme(this.alarme.sample());
  }

}
