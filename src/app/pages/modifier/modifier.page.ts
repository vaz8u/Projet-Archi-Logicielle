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
  public alarmeModule = AlarmeModule.getInstance();
  public calcul: any;
  public emplacement: boolean;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    console.log('id alarme a modif :', id);
    this.alarme = this.alarmeModule.alarmes.find(alarme => alarme.id === id);
    console.log('alarme a modif :', this.alarme);

    this.calcul = new CalculModule(this.alarme);

  }

    // TODO: ajouter la fonction pour modifier l'alarme
  calculer(){
      this.alarme.heure = this.calcul.calculer();
  }
}
