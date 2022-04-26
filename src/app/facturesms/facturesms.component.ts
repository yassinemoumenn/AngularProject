
import { Component, OnInit } from '@angular/core';
import { CountService } from '@syncfusion/ej2-angular-richtexteditor';
import { contentscroll } from '@syncfusion/ej2-richtexteditor';
import { Facture } from '../model/facture.model';
import { Facturesms } from '../model/facturesms.model';
import { FactureService } from '../service/facture.service';

@Component({
  selector: 'app-facturesms',
  templateUrl: './facturesms.component.html',
  styleUrls: ['./facturesms.component.css']
})
export class FacturesmsComponent implements OnInit {


  factures:Facturesms[];
  //factures2:Facture[];
  factures2: Array<Facturesms> = [];
  facturesustilisateur: Array<Facturesms> = [];
  facturesclien: Array<Facturesms> = [];
  typeuser="";
  idactive="";
  idboss="";
  constructor(private factureservice:FactureService) { }
  ngOnInit(): void {
    this.typeuser=localStorage.getItem('typeuser');
    this.idactive=localStorage.getItem("iduser");
    this.idboss=localStorage.getItem('idclient');
    console.log("user active is",this.idactive); 
    //this.factureservice.listefacture();
    this.factureservice.listefacturesms().subscribe(prods => {    
      console.log("prdfi33n")  ;  
      console.log(prods);      
           this.factures = prods["hydra:member"];
           console.log('tables final user',this.factures);
           console.log("deuxiem table ",this.factures2);
 
           this.getfacture();
           this.getfacturesClient();
           },
           err => {
             alert("problem d acce a l api");
           });      
  }
  getfacture(){
    this.factures.forEach(element => {
      console.log(typeof element);
      var  fact=new Facturesms();
      fact.id=element.id;
      fact.idboss=element.idboss;
      fact.iduser=element.iduser;
      fact.datecration=element.datecration;
      fact.nombremessagenv=element.nombremessagenv;
      fact.nomuser=element.nomuser;
      fact.totale=element.totale;
      fact.taille=element.taille;

      fact.typemessageenv=element.typemessageenv;
      fact.unite=element.unite;
      console.log("to",element);
      this.factures2.push(fact);
    }
    );
  }
  getfacturesClient(){
  console.log('facture client');
    this.factures.forEach(element => {
      console.log(typeof element);
      console.log(element.iduser,"--",this.idactive);
      if(element.iduser==this.idactive || element.idboss==this.idactive){
      var  fact=new Facturesms();
      fact.id=element.id;
      fact.idboss=element.idboss;
      fact.iduser=element.iduser;
      fact.datecration=element.datecration;
      fact.nombremessagenv=element.nombremessagenv;
      fact.nomuser=element.nomuser;
      fact.totale=element.totale;
      fact.taille=element.taille;
      fact.typemessageenv=element.typemessageenv;
      fact.unite=element.unite;
      console.log("toclient",element);
      this.facturesclien.push(fact);
    }
    }
    );
  }

  getfactureutilisateur(){
    console.log('facture utilisateur');
      this.factures.forEach(element => {
        console.log(typeof element);
        console.log(element.iduser,"--",this.idactive);
        if(element.iduser==this.idactive){
        var fact=new Facturesms();
        fact.id=element.id;
        fact.idboss=element.idboss;
        fact.iduser=element.iduser;
        fact.datecration=element.datecration;
        fact.nombremessagenv=element.nombremessagenv;
        fact.nomuser=element.nomuser;
        fact.totale=element.totale;
        fact.taille=element.taille;
        fact.typemessageenv=element.typemessageenv;
        fact.unite=element.unite;
        console.log("toclient",element);
        this.facturesustilisateur.push(fact);
      }
      }
      );
    }
  selectedDevice = '';
  mois=["01","02","03","04","05","06","07","08","09","10","11","12"]
  annee=["2020","2021","2022","2023","2024","2025","2026"];
  anneselect="";
  moisselect="";
  selectText(newValue2) {
    console.log(newValue2);
    this.moisselect=newValue2;
    this.calculeculetotalemois(this.moisselect,this.anneselect);
    console.log("totale final =",this.totalefinal);
  }
  selectText2(newValue3) {
    console.log(newValue3);
    this.anneselect=newValue3;
    this.calculeculetotalemois(this.moisselect,this.anneselect);
    console.log("totale final =",this.totalefinal);
  }
  totalefinal:Number;
  calculeculetotalemois(a:String,b:String){
    if(this.typeuser=="client"){
      var totale=0;
      this.facturesclien.forEach(element => {
      var moisselectionne=element.datecration.substring(5,7);
      var anneeselectionner=element.datecration.substring(0,4);
      console.log(moisselectionne,"" ,anneeselectionner);
      if (moisselectionne===a && anneeselectionner===b) {
        totale=totale+Number(element.totale);
      }
      });
    }
    else if(this.typeuser=="utilisateur"){
      var totale=0;
      this.facturesustilisateur.forEach(element => {
      var moisselectionne=element.datecration.substring(5,7);
      console.log(moisselectionne);
      if (moisselectionne===a) {
        totale=totale+Number(element.totale);
      }
      });
    }
    else if(this.typeuser=="admin"){
      var totale=0;
      this.factures.forEach(element => {
      var moisselectionne=element.datecration.substring(5,7);
      console.log(moisselectionne);
      if (moisselectionne===a) {
        totale=totale+Number(element.totale);
      }
      });
    }
      this.totalefinal=totale;
  }
}
