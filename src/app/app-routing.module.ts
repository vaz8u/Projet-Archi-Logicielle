import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alarmes',
    pathMatch: 'full'
  },
  {
    path: 'alarmes',
    loadChildren: () => import('./pages/alarmes/alarmes.module').then( m => m.AlarmesPageModule)
  },
  {
    path: 'modifier/:id',
    loadChildren: () => import('./pages/modifier/modifier-routing.module').then( m => m.ModifierPageRoutingModule)
  },
  {
    path: 'emploi-du-temps',
    loadChildren: () => import('./pages/emploi-du-temps/emploi-du-temps.module').then( m => m.EmploiDuTempsPageModule)
  },
  {
    path: 'lieux-de-travail',
    loadChildren: () => import('./pages/lieux-de-travail/lieux-de-travail.module').then( m => m.LieuxDeTravailPageModule)
  },
  {
    path: 'reglages',
    loadChildren: () => import('./pages/reglages/reglages.module').then( m => m.ReglagesPageModule)
  },
  {
    path: 'aides',
    loadChildren: () => import('./pages/aides/aides.module').then( m => m.AidesPageModule)
  },
  {
    path: 'modifier',
    loadChildren: () => import('./pages/modifier/modifier.module').then( m => m.ModifierPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
