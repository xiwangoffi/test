import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-formulaire-joueur', //Selection du fichier où se trouve la vue
  templateUrl: './formulaire-joueur.component.html', // Selection du composant html
  styleUrls: ['./formulaire-joueur.component.scss'] // Selection du fichier scss du composant html
})

export class FormulaireJoueurComponent implements OnInit {
  // Création de myData qui permet de récupérer les données du formulaires des joueurs.
  myData: any[] | undefined; // Initialisation de la variable "myData" pour stocker les pseudos des joueurs
  
  constructor(private router:Router){}
  versPartie(){
    this.router.navigate(['/debut-partie']); // Redirection des joueurs vers le début partie
  }
  @Output()
  sendRequestToFather = new EventEmitter();
  ngOnInit(): void {
  }
  // A la complétion du formulaire des joueurs, on envoit les noms dans Joueurs.
  onSubmit(form: NgForm) {
    this.myData = [form.value.Joueur1, form.value.Joueur2]; // Récupération des pseudos insérer dans le formulaire joueur
    console.log(this.myData); // Affichage des pseudos en console pour debug
    // On envoit Joueurs pour traitement
    this.sendRequestToFather.emit(this.myData);
  }
}
