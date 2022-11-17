import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {IonicStorageModule} from '@ionic/storage-angular';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';

export let appInjector: Injector;

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},AndroidPermissions, LocationAccuracy],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    appInjector = this.injector;
  }
}
