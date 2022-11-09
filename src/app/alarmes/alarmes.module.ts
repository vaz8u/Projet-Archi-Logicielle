import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlarmesPageRoutingModule } from './alarmes-routing.module';

import { AlarmesPage } from './alarmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmesPageRoutingModule
  ],
  declarations: [AlarmesPage]
})
export class AlarmesPageModule {}
