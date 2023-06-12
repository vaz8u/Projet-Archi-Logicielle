import {Component, OnInit} from '@angular/core';
import {appInjector} from '../../app.module';
import {AlarmeModule} from '../../modules/alarme.module';
import {ALARMES} from '../../../data/alarmes';
import {Storage} from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';


const storage = appInjector.get(Storage);

@Component({
  selector: 'app-alarmes',
  templateUrl: './alarmes.page.html',
  styleUrls: ['./alarmes.page.scss'],
})
export class AlarmesPage implements OnInit {
  public alarmeModule = AlarmeModule.getInstance();
  public modifier = '/modifier/';
  public alertController: AlertController;

  async ngOnInit() {
    await storage.create();
    this.alarmeModule.initAlarme();
    this.alertController = appInjector.get(AlertController);
  }

  async supprimer(alarm) {
    await this.afficherConfirmation('Voulez-vous supprimer l\'alarme : '+ alarm.nom + ' ?', 'supprimer', alarm);
  }

  allumer(alarm) {
    this.alarmeModule.toggleAlarme(alarm.id);
    console.log('etat de l\'alarme :', alarm.allume);
    console.log('id de l\'alarme :', alarm.id);
  }

  ajouter() {
    this.alarmeModule.addAlarme(this.alarmeModule.sample());
  }

  async afficherConfirmation(_message: string, _action: string, arg: any) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: _message,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            // Action à effectuer lorsque l'utilisateur clique sur "Annuler"
            console.log('Action annulée');
          }
        },
        {
          text: 'Confirmer',
          handler: () => {
            if(_action === 'supprimer'){
              this.alarmeModule.removeAlarme(arg.id);
            }
            // Action à effectuer lorsque l'utilisateur clique sur "Confirmer"
            console.log('Action confirmée');
            // Ajoutez ici le code pour effectuer l'action souhaitée
          }
        }
      ]
    });
    await alert.present();
  }
}
