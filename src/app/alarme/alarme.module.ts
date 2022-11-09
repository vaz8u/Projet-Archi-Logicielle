import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Directory, Encoding, Filesystem, ReadFileResult } from '@capacitor/filesystem';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AlarmeModule {
  public alarmes: {
    nom: string;
    heure: string;
    allume: boolean;
    jours: string[];
    emploiDuTemps: string;
    debutCours: string;
    tempsReveil: string;
    tempsArrivee: string;
    lieuDepart: string;
    lieuArrivee: string;
  }[] = [];

    /*this.alarmes = [
    {
      nom: 'Alarme 1',
      heure: '8:00',
      allume: false,
      jours: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      emploiDuTemps: null,
      debutCours: null,
      tempsReveil: null,
      tempsArrivee: null,
      lieuDepart: null,
      lieuArrivee: null
    },
    {
      nom: 'Alarme 2',
      heure: '9:00',
      allume: false,
      jours: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      emploiDuTemps: null,
      debutCours: null,
      tempsReveil: null,
      tempsArrivee: null,
      lieuDepart: null,
      lieuArrivee: null
    },
    {
      nom: 'Alarme 3',
      heure: '10:00',
      allume: true,
      jours: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      emploiDuTemps: null,
      debutCours: null,
      tempsReveil: null,
      tempsArrivee: null,
      lieuDepart: null,
      lieuArrivee: null
    }
  ];*/

 getAlarmes(){return this.alarmes;}

 sample(){
  return {
    nom: 'Alarme 1',
    heure: '8:00',
    allume: false,
    jours: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    emploiDuTemps: '',
    debutCours: '',
    tempsReveil: '',
    tempsArrivee: '',
    lieuDepart: '',
    lieuArrivee: ''
  };
 }

 // Lit le fichier mail.json
  //  Si le fichier n'existe pas, on le crée sans valeurs
  //  Sinon on lit le fichier et ajoute les données à data
  async initAlarme() {
    await Filesystem.readFile({
      path: '../data/alarmes.json',
      directory: Directory.Data,
    })
      .catch(() => {
        this.updateFile(null);
      })
      .then((data: ReadFileResult) => {
        // Si le fichier est en base64
        if (data.data[0] === 'W') {
          this.alarmes = JSON.parse(atob(data.data));
        }
        // Si le fichier est en UTF-8
        else {
          this.alarmes = JSON.parse(data.data);
        }
      });
  }

  // Ajoute le mail mail à la liste data et l'enregistre dans le fichier
  addAlarme(alarme: any) {
    this.alarmes.push(alarme);
    this.updateFile(this.alarmes);
  }

  // Supprime le mail à l'indice idMail dans data
  removeAlarme(idAlarme: number) {
    this.alarmes.splice(idAlarme, 1);
    this.updateFile(this.alarmes);
  }

  // Supprime le fichier
  async deleteFile() {
    await Filesystem.deleteFile({
      path: '../data/alarmes.json',
      directory: Directory.Data,
    });
    return true;
  }

  // Crée le fichier avec data comme data
  async writeFile(newData: any) {
    await Filesystem.writeFile({
      path: '../data/alarmes.json',
      data: JSON.stringify(newData),
      directory: Directory.Data,
      recursive: true,
      encoding: Encoding.UTF8,
    });
  }

  // Met à jour le fichier
  async updateFile(newData: any) {
    await this.writeFile(newData);
  }
}
