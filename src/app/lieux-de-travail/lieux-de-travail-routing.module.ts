import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LieuxDeTravailPage } from './lieux-de-travail.page';

const routes: Routes = [
  {
    path: '',
    component: LieuxDeTravailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LieuxDeTravailPageRoutingModule {}
