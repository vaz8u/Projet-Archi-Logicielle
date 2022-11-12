/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lieux-de-travail',
  templateUrl: './lieux-de-travail.page.html',
  styleUrls: ['./lieux-de-travail.page.scss'],
})
export class LieuxDeTravailPage implements OnInit {
    public nom: string;
    public rue: string;
    public nrue: number;
    public ville: string;

  public lieux: {
    nom: string;
    rue: string;
    nrue: number;
    ville: string;
  }[] = [];

  constructor() { }

  ngOnInit() {
  }

  ajouter_lieu(){
    this.lieux.push({nom:this.nom, rue:this.rue, nrue:this.nrue, ville:this.ville});
  }

  supprimer_lieu(lieu: any){
    this.lieux.splice(this.lieux.indexOf(lieu), 1);
  }
}
