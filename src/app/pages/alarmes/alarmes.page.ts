import {Component, OnInit} from '@angular/core';
import {appInjector} from '../../app.module';
import {AlarmeModule} from '../../modules/alarme.module';
import {ALARMES} from '../../../data/alarmes';
import {Storage} from '@ionic/storage-angular';

const storage = appInjector.get(Storage);

@Component({
  selector: 'app-alarmes',
  templateUrl: './alarmes.page.html',
  styleUrls: ['./alarmes.page.scss'],
})
export class AlarmesPage implements OnInit {
  public alarmeModule = AlarmeModule.getInstance();
  public modifier = '/modifier/';

  async ngOnInit() {
    await storage.create();
    this.alarmeModule.initAlarme();
  }

  supprimer(alarm) {
    this.alarmeModule.removeAlarme(alarm.id);
  }

  allumer(alarm) {
    this.alarmeModule.toggleAlarme(alarm.id);
    console.log('etat de l\'alarme :', alarm.allume);
    console.log('id de l\'alarme :', alarm.id);
  }

  ajouter() {
    this.alarmeModule.addAlarme(this.alarmeModule.sample());
  }

}
