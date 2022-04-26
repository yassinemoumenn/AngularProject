import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Courier } from '../model/courier.model';
import { Courrier } from '../model/courrier.model';
import { CourierService } from '../service/courier.service';
import { CourrierService } from '../service/courrier.service';

@Component({
  selector: 'app-addcourrier',
  templateUrl: './addcourrier.component.html',
  styleUrls: ['./addcourrier.component.css']
})
export class AddcourrierComponent implements OnInit {
  public Editor = ClassicEditor;
  teml=0;
  ckEditorConfig: {} = { "uiColor": "#CFD8D3", "removeButtons": "Save,Templates,Find,Replace,Scayt,SelectAll,Smiley,Flash,SetLanguage" };
  conteur=0;
  urlfin="";
  localUrl="";
  statuzs :Number;
  nomcsv="";
  nomfilvcard="";
  messageenv : String;
  apiURL: string = 'https://127.0.0.1:8000/api/messagevs'; 
  courriers : Courier[];
  titre="";
  objet="";
  variables=["Nom","Prenom","Adresse","Email","Date","Numeroddossier","Number",'Age'];
  variables2=[];
 //url1="data:image/gif;base64,R0lGODlhWAAfANUAANPeKpeUltrhJN/kXqWio1IwIi0xKdHPz3BtbvBvIvj49wUEBU1LTKy0OdZlJY1KKEpRL211ONjgKImSOqlVKNrhOOzr69jgLjomHre/NtXfKJylOsHJNSkYFnyDOdLbL9fgJ7GvsM7XM1tjNJWdO+PkGTpBKeDjI87SK289JcJeJtfgLSEjH9vhKNzhIb+9vHt3eT48PsXNMNrfLtva2YeEh"
 //url1="data:image/gif;base64,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" 
 //url2="data:image/gif;base64,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"
  selectedSkill;
  content="";
  url1="https://bootdey.com/img/Content/avatar/avatar7.png";
  public editorValue: string = '';
  //public editorValue;
  @ViewChild("editor", { static: false }) ckEditorBlurEle: any;
  test="99";
  logo="";
  langue="";
  html="<p>hada test de html</p>";
  //html2=htmlstrin;
  pied="";
  entet="";
  pdffilepath="";
  routemodifier="0";
  constructor(private courierservice2: CourierService,
    private courierservice: CourrierService,private http : HttpClient
    ,private router: Router) { }

  ngOnInit(): void {
    console.log('get table ',JSON.parse(localStorage.getItem("notrtrVA")));
    this.variables2=JSON.parse(localStorage.getItem("notrtrVA"));
    this.courierservice2.listcourrier().subscribe(prods => {    
      console.log("prdfin")  ;  
      console.log(prods);      
           //this.user2 = prods[4];
           this.courriers = prods["hydra:member"]; 
           console.log(this.courriers); 
          // alert("goo");
           },
           err => {
             alert("problem d acce a l api");
           });    
 
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
selectlogo($event){
  console.log("hh");
  if($event.target.files){
  console.log('path',$event.target.value);
  var url4=$event.target.files[0];
   var url3=$event.target.value;
    url3=url3.replace("\\","/");
  console.log("url2",url3);
  console.log("url4",url4);
   var url9="C:/fakepath/csv.PNG";
  var i;
 // for(i=0,i<=url3.le)
    var reader =new FileReader();
    reader.readAsDataURL($event.target.files[0]);
   // console.log( reader.readAsDataURL($event.target.files[0]));
    reader.onload=(ev:any)=>{
     this.url1=ev.target.result;
     localStorage.setItem('urllogo',String( this.url1));
      var formData: any = new FormData();
      formData.set("path",url3);
      formData.set("contac","contact78999.vcf");
      console.log("hada base62",this.url1);
      console.log("fin url");
      console.log(formData);
    }
    }
  }
  devices = 'one two three'.split(' ');
      selectedDevice = '';
  onChange2(newValue) {
    this.titre=newValue;
      console.log(newValue);
       this.getcourreir(this.titre);
}
selectedDevice2 = '';
public ckEditorFocusOut(event) {
  console.log("bluur");
  this.ckEditorBlurEle = event;
  //event.editor.insertHtml("<span>Hello World!</span>");
}
onChange3(newValue) {
  console.log("change3");
  this.ckEditorFocusOut(event);
  console.log(newValue);
 // console.log(this.courriers[newValue-1].titre);
  this.selectedDevice2 = newValue;
 console.log("logo base donnne",this.selectedDevice2);
}
selectText(newValue2) {
  console.log(newValue2);
  //console.log(this.courriers[newValue-1].titre);
  console.log("hellow",this.ckEditorBlurEle);
  //var selection = event.editor.getSelection();
  this.ckEditorBlurEle.editor.insertHtml("[#"+newValue2+"#]");
    //this.myEditor.instance.insertText(value);
}
newcourrier = new Courrier();
newcourrier2 = new Courier();  
newcourriermodifier = new Courrier(); 
newcourriermodifier2 = new Courier(); 
addcourrier(){ 
  console.log("ooooooooooofffffff");
  this.newcourrier.titre=this.titre;
  this.newcourrier.objet=this.objet;
  this.newcourrier.pied=this.pied;
  this.newcourrier.entet=this.entet;
  this.newcourrier.logo=this.logo;
  this.newcourrier.content=this.content;
  this.newcourrier2.titre=this.titre;
  this.newcourrier2.objet=this.objet;
  this.newcourrier2.pied=this.pied;
  this.newcourrier2.entet=this.entet;
  this.newcourrier2.logo=this.url1;
  this.newcourrier2.content=this.content;
  this.newcourrier2.langue=this.langue;
  this.newcourrier2.identifier="couurie test";
  //console.log("hadaa courrier",this.newcourrier);
  console.log("hadaa courrier2",this.newcourrier2);
//this.courierservice.ajoutercourier(this.newcourrier).then(prod => {      
  //  console.log(prod); 
  //});  
  this.courierservice2.ajoutercourier(this.newcourrier2).then(prod => {      
    console.log(prod); 
  });  
   this.router.navigate(['towbutton']);    
   //alert("votre utilisateur bien ajouté");
  } 
  addcoppiercourrier(){ 
    console.log('titre modofier',this.titre);
    this.newcourriermodifier.titre=this.titre;
    console.log('titre modofier',this.titre);
    this.newcourriermodifier.objet=this.objet;
    console.log('titre modofier',this.titre);
    this.newcourriermodifier.pied=this.pied;
    console.log('titre modofier',this.titre);
    this.newcourriermodifier.entet=this.entet;
    this.newcourriermodifier.logo=this.logo;
    this.newcourriermodifier.content=this.content;
    console.log("hadaa courrier modifier",this.newcourriermodifier);
    this.newcourriermodifier2.titre=this.titre;
    this.newcourriermodifier2.objet=this.objet;
    this.newcourriermodifier2.pied=this.pied;
    this.newcourriermodifier2.langue=this.langue;
    this.newcourriermodifier2.entet=this.entet;
    this.newcourriermodifier2.logo=this.logo;
    this.newcourriermodifier2.content=this.content;
    this.courierservice.ajoutercourier(this.newcourriermodifier).then(prod => {      
      console.log(prod); 
    });  
    this.newcourriermodifier2.identifier="couurie test";

    console.log("courrier modifier ",this.newcourriermodifier2);
    this.courierservice2.ajoutercourier(this.newcourriermodifier2).then(prod => {      
      console.log(prod); 
    });  
    this.router.navigate(['towbutton']);
    }
}
