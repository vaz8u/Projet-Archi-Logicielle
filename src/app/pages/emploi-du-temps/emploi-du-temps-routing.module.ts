import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmploiDuTempsPage } from './emploi-du-temps.page';

const routes: Routes = [
  {
    path: '',
    component: EmploiDuTempsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploiDuTempsPageRoutingModule {}
