import { Component, HostListener, OnInit } from '@angular/core';
import * as jsPDfF from 'jspdf';
import html2canvas from 'html2canvas';
//import { time } from 'console';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { Router } from '@angular/router';
import { CourrierService } from '../service/courrier.service';
import { Courrier } from '../model/courrier.model';
import { Courier } from '../model/courier.model';
import { CourierService } from '../service/courier.service';
//import {}
declare var CKEDITOR: any;
@Component({
  selector: 'app-letrreformat',
  templateUrl: './letrreformat.component.html',
  styleUrls: ['./letrreformat.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class LetrreformatComponent implements OnInit {
  public Editor = ClassicEditor;
  data: [][];
  conteur=0;
  teml=0;
  kk="";
  urlfin="";
  vario: Number=0;
  a : Number=1;
  localUrl="";
  nomcsv="";
  Nom_Client="anouar";
  nomfilvcard="";
  messageenv : String;
  titre2="";
  objet2="";
  content="hollla";
  content2="hollla";

  entete2="";
  pied2="";
  langue2="";
  logo="";
  newcourrier = new Courrier();
  newcourrier2 = new Courier();  
  newcourriermodifier = new Courrier(); 
  newcourriermodifier2 = new Courier(); 

  routemodifier="0";
  langue="";
  favoriteSeason: string;
  seasons: string[] = ['francais', 'arabe'];
  //mymessage =new Messageenvoyer;
  apiURL: string = 'https://127.0.0.1:8000/api/messagevs'; 
  constructor(private rout : Router,private courierservice2: CourierService,private courierservice: CourrierService) { }
  @HostListener('change',['$event.target'])
  onChange(target:HTMLInputElement){
    const file=target.files[0];
    this.nomcsv=target.files[0]["name"]
    this.nomfilvcard=target.files[0]["name"];
    this.urlfin=target.value;
   this.nomfilvcard=this.nomfilvcard.replace(".","_");
   this.nomfilvcard=String(String(this.nomfilvcard)+".vcf");
    console.log("hada vcard dyalna",this.nomfilvcard);
    console.log("hada url dyalna",this.urlfin);
    console.log("hada filecsv",this.nomcsv);
    var reader =new FileReader();
    console.log("ma3rfc");
    if (target.files && target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.localUrl = event.target.result;
          console.log("probleme2:", this.localUrl);
      }
      reader.readAsDataURL(target.files[0]);
  }
  /*  this.excelObservable = new Observable((subscriber: Subscriber<Messagevariables>) => {
      this.readFile(file, subscriber);
    });
    
    this.excelObservable.subscribe((d) => {
      console.log('hadi d3');
      //console.log(d[0]);
     // this.newmessage=d[0];
      //this.newmessage.telGest=String(d[0]["tel_gest"]);
    //this.newmessage.idClient=Number(localStorage.getItem('iduser'));
     //this.newmessage.numeroDossier=d[0]['numeroDossier'];                     
     //this.newmessage.telClient=d[0]["tel_client"];
     //this.newmessage.telGest=String(d[0]["tel_gest"]);
     console.log('hadi d mzssag dyalna');
     console.log( this.newmessage.idClient);
      this.eventEmitter.emit(d);
    });*/
    
  }
  ngOnInit(): void {
    this.routemodifier=localStorage.getItem('routemodifier');
      this.titre2=localStorage.getItem('titremodifier');
      console.log('hada titre modifier',this.titre2);
      this.objet2=localStorage.getItem('objetmodifier');
      this.entete2=localStorage.getItem('entetmodifier');
      this.pied2=localStorage.getItem('piedmodifier');
      this.content2=localStorage.getItem('contentmodifier');
      this.logo=localStorage.getItem('logomodifier');
      this.langue2=localStorage.getItem('languemodifier');

     // this.routemodifier="0";
   /*this.titre2=localStorage.getItem('titre');
    this.objet2=localStorage.getItem('objet');
    this.entete2=localStorage.getItem('header');
    this.pied2=localStorage.getItem('pied');
    this.logo=localStorage.getItem('logo');
   console.log(localStorage.getItem('titre')); 
   console.log(localStorage.getItem('objet')); */
  
  }
  chargerbody(){
    console.log("titre",this.titre2);
    console.log("content",this.content);
  }
  functiiopdf(){
    for(var i = 1; i <= 4; i++){
     this.vario=i;
    console.log('hii',i);
    this.Nom_Client='an',this.a;
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    this.a=1;
    console.log('anouar',this.a);
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDfF.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('b.pdf'); // Generated PDF
     
  });
}
   /* console.log("pdf");
    const doc= new jsPDfF.jsPDF();
    //doc.text("holla dear",15,15);
    doc.setFontSize(40);
    //doc.text(30, 20, 'Hello world!');
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    doc.output('datauri');
    doc.addImage(this.localUrl, 'JPEG', 0, 0, 10,10 );
    doc.addImage(this.localUrl, 'JPEG', 0, 0, 10,10 );
    doc.save('test1ZE2.pdf');*/
  }
  show(){
    this.teml=1;
    this.titre2=localStorage.getItem('titre');
    this.objet2=localStorage.getItem('objet');
    this.entete2=localStorage.getItem('header');
    this.pied2=localStorage.getItem('pied');
    this.logo=localStorage.getItem('logo');
    this.langue2=localStorage.getItem('langue');
    console.log("logo",this.logo);
  //  console.log("content",this.content);
  }
  showmodifier(){
    this.teml=1;
    //this.titre2=localStorage.getItem('titremodifier');
    //this.titre2=this.titre2+"v2";
    //this.objet2=localStorage.getItem('objetmodifier');
    this.entete2=localStorage.getItem('entetmodifier');
    this.pied2=localStorage.getItem('piedmodifier');
    this.logo=localStorage.getItem('logomodifier');
    this.langue2=localStorage.getItem('languemodifier');
    console.log("logo",this.logo);
     console.log("titre",this.titre2);
  }
  telechargerpdf(){
    console.log('holla bb');
     var data = document.getElementById('contentToConvert2');
  this.addcourrier()
   this.rout.navigate(['templatce']);
 }
 addcourrier(){ 
  this.newcourrier.titre=this.titre2;
  this.newcourrier.objet=this.objet2;
  this.newcourrier.pied=this.pied2;
  this.newcourrier.entet=this.entete2;
  this.newcourrier.logo=this.logo;
  this.newcourrier.content=this.content;
  this.newcourrier2.titre=this.kk;
  this.newcourrier2.objet=this.objet2;
  this.newcourrier2.pied=this.pied2;
  this.newcourrier2.entet=this.entete2;
  this.newcourrier2.logo=this.logo;
  this.newcourrier2.content=this.content;
  this.newcourrier2.langue=this.langue2;
  this.newcourrier2.identifier="couurie test";
  console.log("hadaa courrier",this.newcourrier);
  console.log("hadaa courrier2",this.newcourrier2);
  this.courierservice.ajoutercourier(this.newcourrier).then(prod => {      
    console.log(prod); 
  });  
  this.courierservice2.ajoutercourier(this.newcourrier2).then(prod => {      
    console.log(prod); 
  });  
   //this.rout.navigate(['cour']);    
   //alert("votre utilisateur bien ajouté");
  } 
  addcoppiercourrier(){ 
    console.log('titre modofier',this.titre2);
    this.newcourriermodifier.titre=this.titre2;
    console.log('titre modofier',this.titre2);
    this.newcourriermodifier.objet=this.objet2;
    console.log('titre modofier',this.titre2);
    this.newcourriermodifier.pied=this.pied2;
    console.log('titre modofier',this.titre2);
    this.newcourriermodifier.entet=this.entete2;
    this.newcourriermodifier.logo=this.logo;
    this.newcourriermodifier.content=this.content2;
    console.log("hadaa courrier modifier",this.newcourriermodifier);
    console.log('titre modofier',this.titre2);
    this.newcourriermodifier2.titre=this.titre2;
    this.newcourriermodifier2.objet=this.objet2;
   //this.newcourriermodifier2.pied=this.pied2;
    //this.newcourriermodifier2.langue=this.langue2;
    //this.newcourriermodifier2.entet=this.entete2;
    this.newcourriermodifier2.logo=this.logo;
    this.newcourriermodifier2.content=this.content2;
    this.courierservice.ajoutercourier(this.newcourriermodifier).then(prod => {      
      console.log(prod); 
    });  
    this.newcourriermodifier2.identifier="couurie test";

    console.log("courrier modifier ",this.newcourriermodifier2);
    this.courierservice2.ajoutercourier(this.newcourriermodifier2).then(prod => {      
      console.log(prod); 
    });  
    this.rout.navigate(['templatce']);
    } 
}
