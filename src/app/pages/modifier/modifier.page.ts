import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlarmeModule } from '../../modules/alarme.module';
import { CalculModule } from '../../modules/calcul.module';
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

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    console.log('activatedRoute :', this.activatedRoute);
    console.log('snapshot :', this.activatedRoute.snapshot);
    console.log('paramMap :', this.activatedRoute.snapshot.paramMap);
    console.log('alarme a modif :', id);

    // TODO: récupérer l'alarme à modifier
    /*const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.alarme = this.alarmes.getAlarme(Number(id));
    this.calcul = new CalculModule(this.alarme);*/
  }

    // TODO: ajouter la fonction pour modifier l'alarme
  calculer(){
      this.alarme.heure = this.calcul.calculer();
  }
}
