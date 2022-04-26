


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compagnecsv } from '../model/compagnecsv.model';
import { Facture } from '../model/facture.model';
import { Facturesms } from '../model/facturesms.model';
import { Messsage } from '../model/messsage.mode';
import { CompagneService } from '../service/compagne.service';
import { FactureService } from '../service/facture.service';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  constructor(private router:Router,
    private messageservice :MessageService,private servicefacture:FactureService,private servicecreecompagne : CompagneService) { }
nomcomp='';
sourceroute="";
datecompagne='';
typecompagne="";
contentmessageCompagne='';
languemessagecompagne='';
facturetotalcompagne='';
unitecture=0;
nomfilcsvcompagne='';
nembreligneofdatatcompagne="";
taillemessage=0;
typemessage="";
datafile="";
nembreunite="";
  ngOnInit(): void {

    console.log("typemessage",localStorage.getItem('typemessage'));
this.datafile=localStorage.getItem('datafile')
this.nembreunite=localStorage.getItem('nembreunite');
    this.nomcomp=localStorage.getItem("nomcompagne");
this.datecompagne=localStorage.getItem('datecreationcompagne');
this.typecompagne=localStorage.getItem('typecompagne');
this.typemessage=localStorage.getItem('typemessage');
this.contentmessageCompagne=localStorage.getItem("contentmessage");
this.languemessagecompagne=localStorage.getItem("languemessage");
this.facturetotalcompagne=localStorage.getItem('facturetotalcompagne');
this.nomfilcsvcompagne=localStorage.getItem("nomfile");
this.nembreligneofdatatcompagne=localStorage.getItem('nembreligneofdatatcompagne');
this.sourceroute= localStorage.getItem("routertypemessage");
this.taillemessage=Number(localStorage.getItem('taillemessage'));
this.unitecture=Number(localStorage.getItem("unite"));
console.log('route',this.sourceroute);
}
Cancel(){
  this.router.navigate(['home']);
}
precedent()
{
  console.log('precede to ',localStorage.getItem('routertypemessage'));
  if(localStorage.getItem("routertypemessage")==="message simple"){
    this.router.navigate(["messagesimple"]);
  }
  else if(localStorage.getItem("routertypemessage")==="message avec variable"){
    this.router.navigate(["messagevariable"]);
  }
  else if(localStorage.getItem("routertypemessage")==="sms"){
    this.router.navigate(["sms"]);
  }
}
precedent2(){
  this.router.navigate([localStorage.getItem('typecompagne')]);
  localStorage.setItem('precedentresume','true');
}
facture=new Facture();
facturesms=new Facturesms();

confirmer()
{
  var date=new Date();
  var isodate=date.toISOString();
  console.log("isodate",isodate);
  this.facture.nomuser=localStorage.getItem("nomuser")+" "+localStorage.getItem('prenomuser');
  this.facture.datecreation=String(isodate);
  this.facture.iduser=localStorage.getItem('iduser');
  this.facture.idboss=localStorage.getItem('idclient');
  this.taillemessage=this.contentmessageCompagne.length;
  this.facture.nembremessageenv=Number(localStorage.getItem("nembreligneofdatatcompagne"));
  this.facture.typemessageenv=localStorage.getItem("typecompagne");
  if("message avec variable"===localStorage.getItem('routertypemessage')){
    this.facture.unite="0.60";
    var total=0.60*Number(this.facture.nembremessageenv);
    console.log('total is ',total);
    this.facture.totale=String(total);
    this.servicefacture.ajouterfacture(this.facture);
    //localStorage.setItem('facturetotalcompagne',String(total))  
  }
  else if("message simple"===this.facture.typemessageenv){
    this.facture.unite="0.30";
    var total=0.30*Number( this.facture.nembremessageenv);
    console.log('total is ',total);
    this.facture.totale=String(total);
    this.servicefacture.ajouterfacture(this.facture);
    //localStorage.setItem('facturetotalcompagne',String(total))  
  }
  else if("SMS message Simple"===this.facture.typemessageenv){
    this.facturesms.nomuser=localStorage.getItem("nomuser")+" "+localStorage.getItem('prenomuser');
    this.facturesms.datecration=String(isodate);
    this.facturesms.iduser=localStorage.getItem('iduser');
    this.facturesms.idboss=localStorage.getItem('idclient');
    this.facturesms.taille=String(this.contentmessageCompagne.length);
    this.facturesms.nombremessagenv=localStorage.getItem("nembreligneofdatatcompagne");
    this.facturesms.typemessageenv=localStorage.getItem("typecompagne");  
    this.facturesms.unite=String(this.unitecture);
    var total=this.unitecture*Number( this.facture.nembremessageenv)*this.taillemessage;
    console.log('total is ',total);
    this.facturesms.totale=String(total);
    this.facturesms.idmessage='0';
    this.servicefacture.ajouterfacturesms(this.facturesms);
   // localStorage.setItem('facturetotalcompagne',String(total))  
  }
  else if("SMS message avec variable"===this.facture.typemessageenv){
    this.facturesms.nomuser=localStorage.getItem("nomuser")+" "+localStorage.getItem('prenomuser');
    this.facturesms.datecration=String(isodate);
    this.facturesms.iduser=localStorage.getItem('iduser');
    this.facturesms.idboss=localStorage.getItem('idclient');
    this.facturesms.taille=String(this.contentmessageCompagne.length);
    this.facturesms.nombremessagenv=localStorage.getItem("nembreligneofdatatcompagne");
    this.facturesms.typemessageenv=localStorage.getItem("typecompagne");  
    this.facturesms.unite=String(this.unitecture);
    var total=this.unitecture*Number( this.facture.nembremessageenv)*this.taillemessage;
    console.log('total of SMS message variableis  ',total);
    this.facturesms.totale=String(total);
    this.facturesms.idmessage='0';
    this.servicefacture.ajouterfacturesms(this.facturesms);
    //localStorage.setItem('facturetotalcompagne',String(total))  
  }
  console.log('nombre des message is ', this.facture.nembremessageenv);
}
lancercompagne(){
  this.creerCompagne();
  this.addfacturecampagne();
  //this.addmessage();
}
addfacturecampagne(){
 console.log(" alorrs on add facture is",this.typecompagne)
  var date=new Date();
  var isodate=date.toISOString();
  this.facture.nomuser=localStorage.getItem("nomuser")+" "+localStorage.getItem('prenomuser');
  this.facture.datecreation=String(isodate);
  this.facture.iduser=localStorage.getItem('iduser');
  this.facture.idboss=localStorage.getItem('idclient');
  this.taillemessage=this.contentmessageCompagne.length;
  this.facture.nembremessageenv=Number(localStorage.getItem("nembreligneofdatatcompagne"));
  this.facture.typemessageenv=localStorage.getItem("typecompagne");
  if(this.typecompagne=="Compagne WhtsApp"){
    console.log("hhh ok wahtssape ")
    if(this.typemessage=="simple"){
      console.log("hhh o simple mn lfoq")
      this.facture.unite="0.30";
      var total=0.30*Number( this.facture.nembremessageenv);
      console.log('total is ',total);
      this.facture.totale=String(total);
      this.servicefacture.ajouterfacture(this.facture);
      //localStorage.setItem('facturetotalcompagne',String(total))    
    }
    if(this.typemessage=="variable"){
      this.facture.unite="0.60";
      var total=0.60*Number(this.facture.nembremessageenv);
      console.log('total is ',total);
      this.facture.totale=String(total);
      this.servicefacture.ajouterfacture(this.facture);
      //localStorage.setItem('facturetotalcompagne',String(total)) 
    }
  }
  else if(this.typecompagne=='Compagne Sms'){
    if(this.typemessage=="simple"){
      this.facturesms.nomuser=localStorage.getItem("nomuser")+" "+localStorage.getItem('prenomuser');
      this.facturesms.datecration=String(isodate);
      this.facturesms.iduser=localStorage.getItem('iduser');
      this.facturesms.idboss=localStorage.getItem('idclient');
      this.facturesms.taille=String(this.contentmessageCompagne.length);
      this.facturesms.nombremessagenv=localStorage.getItem("nembreligneofdatatcompagne");
      this.facturesms.typemessageenv=localStorage.getItem("typecompagne");  
      this.facturesms.unite=String(this.unitecture);
      var total=this.unitecture*Number( this.facture.nembremessageenv)*this.taillemessage;
      console.log('total is ',total);
      this.facturesms.totale=String(total);
      this.facturesms.idmessage='0';
      this.servicefacture.ajouterfacturesms(this.facturesms);
     // localStorage.setItem('facturetotalcompagne',String(total))  
    
    }
    if(this.typemessage=="variable"){
      this.facturesms.nomuser=localStorage.getItem("nomuser")+" "+localStorage.getItem('prenomuser');
      this.facturesms.datecration=String(isodate);
      this.facturesms.iduser=localStorage.getItem('iduser');
      this.facturesms.idboss=localStorage.getItem('idclient');
      this.facturesms.taille=String(this.contentmessageCompagne.length);
      this.facturesms.nombremessagenv=localStorage.getItem("nembreligneofdatatcompagne");
      this.facturesms.typemessageenv=localStorage.getItem("typecompagne");  
      this.facturesms.unite=String(this.unitecture);
      var total=this.unitecture*Number( this.facture.nembremessageenv)*this.taillemessage;
      console.log('total of SMS message variableis  ',total);
      this.facturesms.totale=String(total);
      this.facturesms.idmessage='0';
      this.servicefacture.ajouterfacturesms(this.facturesms);
    }
  }
}
compagnecsv=new Compagnecsv();
creerCompagne(){
  this.compagnecsv.nom=this.nomcomp;
  console.log('chek fiiinn',this.datecompagne.includes("Z"))
  if(this.datecompagne.includes("Z")){
    this.compagnecsv.datecreation=this.datecompagne;
  }
  else{  this.compagnecsv.datecreation=this.datecompagne+":33.633Z";
}
  this.compagnecsv.type=this.typecompagne;
  this.compagnecsv.typemessage=localStorage.getItem('typemessage');
  if(this.typemessage=="simple"){
    this.compagnecsv.messagesimple=String(true);
    this.compagnecsv.messagevariable=String(false);
    this.compagnecsv.messagepiece=String(false);  
  }
  if(this.typemessage=="variable"){
    this.compagnecsv.messagesimple=String(false);
    this.compagnecsv.messagevariable=String(true);
    this.compagnecsv.messagepiece=String(false);  
  }
  if(this.typemessage=="piece"){
    this.compagnecsv.messagesimple=String(false);
    this.compagnecsv.messagevariable=String(false);
    this.compagnecsv.messagepiece=String(true);  
  }
  this.compagnecsv.datafilecsv=this.datafile;
  this.compagnecsv.iduser=localStorage.getItem("iduser");
  this.compagnecsv.nomfilecsv=this.nomfilcsvcompagne;
  this.servicecreecompagne.addcompagnecsv(this.compagnecsv); 
}

messsage=new Messsage();
addmessage(){
  this.messsage.iduser=localStorage.getItem("iduser");
  //localStorage.setItem('contentmessageCompagne',this.contentmessage);
  this.messsage.content=this.contentmessageCompagne;
  this.messsage.idcompagne=localStorage.getItem("idcompagnenew");
  this.messsage.langue=this.languemessagecompagne;
  //localStorage.setItem("languemessagecompagne",this.langue);
  this.messsage.typemessage=this.typemessage;
  this.messageservice.ajoutermessage(this.messsage);
}
}

