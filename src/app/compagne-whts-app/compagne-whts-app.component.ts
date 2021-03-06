import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Compagnecsv } from '../model/compagnecsv.model';
import { Courier } from '../model/courier.model';
import { Messageenvoyer } from '../model/messageenvoyer.model';
import { Messagevariables } from '../model/messagevariable.model';
import { CompagneService } from '../service/compagne.service';
import { CourierService } from '../service/courier.service';

@Component({
  selector: 'app-compagne-whts-app',
  templateUrl: './compagne-whts-app.component.html',
  styleUrls: ['./compagne-whts-app.component.css']
})
export class CompagneWhtsAppComponent implements OnInit {
  compagnecsv : Compagnecsv[];
  compget =new Compagnecsv();
  titre="";
  teml=1;
  datafilecsv='';
  objet="";
  selectedSkill;
  content="";
  test="99";
  logo="";
  html="<p>hada test de html</p>";
  pied="";
  entet="";
  pdffilepath="";
  statuzs :Number;
  data: [][];
  conteur=0;
  urlfin="";
  localUrl="";
  nomcsv="";
  routtypemessage=""
  nomfilvcard="";
  messageenv : String;
  touslesvariable=['nom','prenom','age','adress','number','gestion','numerodossier','email','null'];
  //array varibales to store csv data
  lines = []; //for headings
  linesR = []; // for rows
  //File upload function
  positionnom=100;
  positionprenom=100;
  positionage=100;
  positionadress=100;
  positionnumber=100;
  positiongestion=100;
  positionnumerodossier=100;
  ppp="";
  positionemail=100;
notrevariable = [];
taillemessage=0;
nembremessage=0;

  mymessage =new Messageenvoyer;
  apiURL: string = 'https://127.0.0.1:8000/api/messagevs'; 
  excelObservable: Observable<Messagevariables>;
  @Output() eventEmitter = new EventEmitter();
  newmessage = new Messagevariables(); 
  constructor( private compagneservice : CompagneService,private courierservice2: CourierService,private rout:Router,private http : HttpClient,) { }
  contentmessage="";
  courriers : Courier[];
  variables2=[];
  selectedDevice="";
  ngOnInit(): void {
    this.taillemessage=this.contentmessage.length;
    this.variables2=JSON.parse(localStorage.getItem("notrtrVA"));
    this.courierservice2.listcourrier().subscribe(prods => {    
      console.log("prdfin")  ;  
      console.log(prods);      
           this.courriers = prods["hydra:member"]; 
           console.log(this.courriers); 
           },
           err => {
             alert("problem d acce a l api");
           });
           this.compagneservice.getcollectiocompagnecsv().subscribe(prods => {    
            console.log("les compagne")  ;  
            console.log(prods);      
                 this.compagnecsv = prods["hydra:member"]; 
                 console.log(this.compagnecsv); 
                // alert("goo");
                 },
                 err => {
                   alert("problem d acce a l api");
                 });
  }
  doSomething(value){
    this.taillemessage=this.contentmessage.length
   /* if(value.key==="Backspace" && (this.taillemessage-1)%160===0 && this.taillemessage!=0){
      this.nembremessage=this.nembremessage-1;
    }*/
    if(this.taillemessage>0 && this.taillemessage<=160){
      this.nembremessage=1;
    }
    if(this.taillemessage>160 && this.taillemessage<=320){
      this.nembremessage=2;
    }
    if(this.taillemessage>320 && this.taillemessage<=480){
      this.nembremessage=3;
    }
    if(this.taillemessage==0){
      this.nembremessage=0;
    }
    //if((this.taillemessage-1)%160===0){
      //this.nembremessage=this.nembremessage+1;
      //this.taillemessage=0;
    //}
    
    console.log('ha event',value)
    console.log('hihi')
  }
  selectText(newValue2) {
    console.log(newValue2);
    this.contentmessage=this.contentmessage+"[#"+newValue2+"#]";
    console.log(this.contentmessage);

    //console.log("hellow",this.ckEditorBlurEle);
    //var selection = event.editor.getSelection();
    //this.ckEditorBlurEle.editor.insertHtml("[#"+newValue2+"#]");
      //this.myEditor.instance.insertText(value);
  }
  precedent(){
    this.rout.navigate(["upload file"]);
    localStorage.setItem('routeprecedent','true');
  }
  Suivant2(){
    localStorage.setItem("contentmessage",this.contentmessage);
    localStorage.setItem("typemessage",this.typemessage);
    localStorage.setItem('languemessage',this.langue);
    localStorage.setItem('taillemessage',String(this.contentmessage.length))
   if(this.typemessage==="simple"){
    //var total=0.30*Number( this.facture.nembremessageenv);
    //localStorage.setItem('facturetotalcompagne',String(total))
    localStorage.setItem("unite","0.30");
    console.log('simple hh somplee')
   }
   if(this.typemessage==="variable"){
    console.log('simple hh variababll')

    //var total=0.30*Number( this.facture.nembremessageenv);
    //localStorage.setItem('facturetotalcompagne',String(total))
    localStorage.setItem("unite","0.60");
   }
    this.rout.navigate(["resume"]);
    //this.rout.navigate(['upload file'])
  }
langue="francais";
onItemChange(value){
  console.log(" Value is : ", value );
  this.langue=value;
}
typemessage="";
onItemChange3(value){
  console.log(" Value is : ", value );
  this.typemessage=value;
}
courrier(){
  this.rout.navigate(["addcourrier"])
    }
  compagne(){
    this.rout.navigate(["CreercompagnecourrierComponent"]);
  
  
  }
  getcourreir(titre){
    this.courriers.forEach((cur) => {
      //console.log("1",newValue,"2",cur.titre)
   if (titre==cur.titre) {
        console.log("idc okkk",cur.titre);
        //this.selectedDevice = newValue;
       // this.titre=String(cur.titre);
       this.entet=String(cur.entet);
        this.pied=String(cur.pied);
        this.content=String(cur.content);
        this.objet=String(cur.objet);
        this.logo=String(cur.logo);
        this.langue=String(cur.langue)
      }
     })
   }

  onChange2(newValue) {
    this.titre=newValue;
  console.log(newValue);
   this.getcourreir(this.titre);
 }
  publipostage(){
    console.log("ppppppppppppppprenom",this.positionnom,"age",this.positionage,"gestion",this.positiongestion,
    "number",this.positionnumber,"prenom",this.positionprenom,"adress",this.positionadress,
    "dossier", this.positionnumerodossier);
    this.localUrl=localStorage.getItem("datafile");
    console.log('data fisssle is ', this.localUrl)
    console.log("header dyalna",this.lines); 
    var formData: any = new FormData();
    formData.set("path",this.urlfin);
    formData.set("nomfilecsv",this.localUrl);
    formData.set("filevcard", this.nomfilvcard);
    formData.set("titre", this.titre);
    formData.set("objet", this.objet);
    formData.set("pied", this.pied);
    console.log('hada howa l pied ', this.pied)
    formData.set("entet", this.entet);
    formData.set("content", this.content);
    formData.set("logo", this.logo);
    formData.set("langue", this.langue);
    //les position des variable dans la table//
    formData.set("positionnom", this.positionnom);
    formData.set("positionprenom", this.positionprenom);
    formData.set("positionage", this.positionage);
    formData.set("positionadress", this.positionadress);
    formData.set("positionnumber", this.positionnumber);
    formData.set("positiongestion", this.positiongestion);
    formData.set("positionnumerodossier", this.positionnumerodossier);
    formData.set("positionemail", this.positionemail);

    ///
    console.log("logo 222",this.localUrl);
    console.log("2");
    console.log("fin url nuopload commen");
    console.log(formData);
    alert("Entrain de traitement2");
    this.http.post<any>("http://127.0.0.1:8000/api/publipostage",
    formData).subscribe(
      (response) => console.log(response["HttpErrorResponse"]["status"]),
      (error) =>{ 
      console.error(error);
      this.statuzs=error["status"];
      if (this.statuzs==200) {
        alert("Les fichiers PDF bien construire, v??rifier votre dossier public");
        this.rout.navigate(["resume"]);
      }
    }
      
    );
  
   // this.messagefile();
  }




}

