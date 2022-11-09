import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlarmesPage } from './alarmes.page';

const routes: Routes = [
  {
    path: '',
    component: AlarmesPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlarmesPageRoutingModule {}
