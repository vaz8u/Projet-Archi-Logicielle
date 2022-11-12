import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LieuxDeTravailPageRoutingModule } from './lieux-de-travail-routing.module';

import { LieuxDeTravailPage } from './lieux-de-travail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LieuxDeTravailPageRoutingModule
  ],
  declarations: [LieuxDeTravailPage]
})
export class LieuxDeTravailPageModule {}
