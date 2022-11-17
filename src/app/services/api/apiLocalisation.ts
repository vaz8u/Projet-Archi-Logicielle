/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { AlertController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class apiLocalisation {
  public lng: number;
  public lat: number;
  public ok = true;
  public dataGPS: any;
  public msgErreur = 'Verifiez que la localisation est activée sur l\'appareil et que l\'application est autorisée à utiliser les données.';

  constructor(
    private locationAccuracy: LocationAccuracy,
    private platform: Platform,
    public alertController: AlertController,
  ) {}

  // Retourne la longitude et la latitude
  async getLocationService(): Promise<any> {
    return await new Promise(async (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(async (resp) => {
        resolve({
          lng: resp.coords.longitude,
          lat: resp.coords.latitude,
        });
        reject('Problème dans la localisation');
      });
    });
  }

  // Vérifie les permissions
  async checkPermission() {
    // Si on est sur browser
      await this.getLocationService().then((resp) => {
        this.lat = resp.lat;
        this.lng = resp.lng;
      });
      await this.requeteAPIgeoApp();
    }
  // Si tout est ok
  async enableGPS() {
    await this.locationAccuracy
      .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
      .then(
        async () => {
          await this.getLocationService().then((resp) => {
            this.lat = resp.lat;
            this.lng = resp.lng;
          });
          await this.requeteAPIgeoApp();
        },
        () => {
          this.ok = false;
          this.alerte();
        },
      );
  }

  // Requete à une api de Reverse Geocoding
  async requeteAPIgeoApp() {
    const requestOptions = {
      method: 'GET',
    };
    const apiKey = 'f9216d4605184137a8349b766db6db3a';
    //@ https://myprojects.geoapify.com/api/FvdDpGVTNQwjhHbibjxb/settings
    await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${this.lat}&lon=${this.lng}&apiKey=${apiKey}`,
      requestOptions
    )
      .then(async (response) => await response.json())
      .then(async (data) => {
        await this.setData(data);
      });
  }

  async setData(data: any) {
    this.dataGPS = data;
    console.log('ici');
  }

  async alerte() {
    const alert = await this.alertController.create({
      header: 'Erreur localisation',
      message: this.msgErreur,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
