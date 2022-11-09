import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Alarmes', url: '/alarmes', icon: 'alarm' },
    { title: 'Emplois du temps', url: 'emploi-du-temps', icon: 'calendar' },
    { title: 'Lieux de travail', url: 'lieux-de-travail', icon: 'navigate' },
    { title: 'Réglages', url: 'reglages', icon: 'settings' },
    { title: 'Aide', url: 'aides', icon: 'help' },];
  constructor() {}
}
