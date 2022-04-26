import { Component, OnInit } from '@angular/core';
import { Courier } from '../model/courier.model';

@Component({
  selector: 'app-viewcourrier',
  templateUrl: './viewcourrier.component.html',
  styleUrls: ['./viewcourrier.component.css']
})
export class ViewcourrierComponent implements OnInit {
  courriers : Courier[];
  titre="";
  teml=1;
  objet="";
  selectedSkill;
  content="";
  test="99";
  logo="";
  langue="";
  pied="";
  entet="";
  email='test';
  constructor() { }
  ngOnInit(): void {
    this.titre= localStorage.getItem("titreview");
    this.entet= localStorage.getItem("entetview");
    this.pied= localStorage.getItem("piedview");
    this.content= localStorage.getItem("contentview");
    this.objet= localStorage.getItem("objetview");
    this.logo= localStorage.getItem("logoview");
    this.langue= localStorage.getItem("langueview");
    console.log("logo base donnne",this.logo);
    console.log('pied',this.pied);
  }

}
