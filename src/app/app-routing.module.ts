import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alarmes',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'alarmes',
    loadChildren: () => import('./alarmes/alarmes.module').then( m => m.AlarmesPageModule)
  },
  {
    path: 'modifier/:id',
    loadChildren: () => import('./modifier/modifier.module').then( m => m.ModifierPageModule)
  },
  {
    path: 'emploi-du-temps',
    loadChildren: () => import('./emploi-du-temps/emploi-du-temps.module').then( m => m.EmploiDuTempsPageModule)
  },
  {
    path: 'lieux-de-travail',
    loadChildren: () => import('./lieux-de-travail/lieux-de-travail.module').then( m => m.LieuxDeTravailPageModule)
  },
  {
    path: 'reglages',
    loadChildren: () => import('./reglages/reglages.module').then( m => m.ReglagesPageModule)
  },
  {
    path: 'aides',
    loadChildren: () => import('./aides/aides.module').then( m => m.AidesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
