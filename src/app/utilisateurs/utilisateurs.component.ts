import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
 utilisateurs : String[];
  constructor() { 
    this.utilisateurs== ["anouar", "gmili", "karim"];
  }

  ngOnInit(): void {
  }

}
