import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Compagne } from '../model/compagne.model';
import { Compagnecsv } from '../model/compagnecsv.model';
import { Messsage } from '../model/messsage.mode';
import { CompagnecsvService } from './compagnecsv.service';
import { MessageService } from './message.service';

const httpOptions = { 
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
providedIn: 'root'
})
export class CompagneService {
  apiURL: string = 'http://213.186.34.94/mybackend/public/index.php/api/compagnecsvs'; 
  apiURL2: string = 'https://127.0.0.1:8000/api/compagnecsvs'; 

  constructor( private messageservice :MessageService,private http : HttpClient,private route: Router) {    
     } 

  addcompagne( comp: Compagne){ 
    console.log(comp);
    console.log("prod");
    return this.http.post<Compagne>(this.apiURL, comp, httpOptions).toPromise().then(data => {
      console.log("rsulta2");
      alert("bien ajouter");
      //localStorage.setItem('iduserrole',String(data['id'])); 
      console.log(data);
    }); 
  }
  addcompagnecsv( comp: Compagnecsv){ 
    console.log("goooooo");
    console.log(comp);
    console.log("prod");
    return this.http.post<Compagne>(this.apiURL, comp, httpOptions).toPromise().then(data => {
      console.log("rsulta2",data["id"]);
      var idcompagnenew=data["id"];
     localStorage.setItem("idcompagnenew",idcompagnenew);
     var rou=localStorage.getItem('routertypemessage');
     console.log('get table ',JSON.parse(localStorage.getItem("notrtrVA")));
      alert("compagne bien ajouter  ajouter");
      this.addmessage();
     /* if(localStorage.getItem("routertypemessage")==="message simple"){
        rou="messagesimple";
      }
      else if(localStorage.getItem("routertypemessage")==="message avec variable"){
        rou="messagevariable";
      }
      else if(localStorage.getItem("routertypemessage")==="sms"){
        rou="sms";
      }
      else if(localStorage.getItem("routertypemessage")==="smsvariable"){
        rou="sms";
      }*/
      //this.route.navigate([rou]);
      //localStorage.setItem('iduserrole',String(data['id'])); 
      console.log(data);
    }); 
  }

  getcollectiocompagnecsv(): Observable<Compagnecsv[]>{    
    return this.http.get<Compagnecsv[]>(this.apiURL);
     } 
     messsage=new Messsage();
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
     addmessage(){
      this.datafile=localStorage.getItem('datafile')
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
