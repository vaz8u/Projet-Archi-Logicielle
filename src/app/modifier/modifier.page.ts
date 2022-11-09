import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlarmeModule } from '../alarme/alarme.module';
import { CalculModule } from '../calcul/calcul.module';
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {

  public alarme: any;
  public alarmes = new AlarmeModule();
  public calcul: any;
  public emplacement: boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const nom = this.activatedRoute.snapshot.paramMap.get('id');
    this.alarme = this.alarmes.getAlarmes().find(alarm => alarm.nom === nom);  }

  calculer(){
      this.alarme.heure = this.calcul.calculer();
  }
}
