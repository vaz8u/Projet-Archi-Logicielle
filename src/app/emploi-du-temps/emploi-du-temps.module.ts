import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmploiDuTempsPageRoutingModule } from './emploi-du-temps-routing.module';

import { EmploiDuTempsPage } from './emploi-du-temps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmploiDuTempsPageRoutingModule
  ],
  declarations: [EmploiDuTempsPage]
})
export class EmploiDuTempsPageModule {}
