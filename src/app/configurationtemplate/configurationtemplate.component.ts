import * as jsPDfF from 'jspdf';
import html2canvas from 'html2canvas';
import { Component, HostListener, OnInit } from '@angular/core';
//import { time } from 'console';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { Router } from '@angular/router';
import { Courrier } from '../model/courrier.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AsyncSubject, Subject } from 'rxjs';
import { Courier } from '../model/courier.model';
declare var CKEDITOR: any;

@Component({
  selector: 'app-configurationtemplate',
  templateUrl: './configurationtemplate.component.html',
  styleUrls: ['./configurationtemplate.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class ConfigurationtemplateComponent implements OnInit {
  temp:Number=0;
  favoriteSeason: string;
  seasons: string[] = ['francais', 'arabe'];
  courrier = new Courrier(); 
  courrier2 = new Courier(); 
  url1="https://bootdey.com/img/Content/avatar/avatar7.png";
  url="";
  langue="";
  contenu="";
  entete="";
  pied="";
  email="";
  contentt="hollla";
  titre="";
  objet="";
  constructor(private rout : Router) { }
  ngOnInit(): void {
  }
  Suivant(){
    //this.temp=1;
    console.log('holla');
    //console.log("content",this.contentt);
    console.log("titre",this.titre);
    console.log("pied",this.pied);
    localStorage.setItem('titre',this.titre); 
    localStorage.setItem('objet',String(this.objet)); 
    localStorage.setItem('header',String(this.entete));
    localStorage.setItem('pied',String(this.pied));
    localStorage.setItem('email',String(this.email));
    localStorage.setItem('logo',this.url1);
    localStorage.setItem('langue',this.langue);
    localStorage.setItem("routemodifier",String(0));
   this.rout.navigate(['format']);
  /* var data = document.getElementById('contentToConvert2');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    //this.a=1;
   // console.log('anouar',this.a);
    var imgWidth = 309;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDfF.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('b.pdf'); // Generated PDF
   // pdf.output("save",'tes.pdf');*/
 // });
}
telechargerpdf(){
   console.log('holla bb');
    var data = document.getElementById('contentToConvert2');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    //this.a=1;
   // console.log('anouar',this.a);
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDfF.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('jk.pdf'); // Generated PDF
  });

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
addtemp(){
  this.courrier.titre=this.titre;
  this.courrier.objet=this.objet;
  this.courrier.entet=this.entete;
  this.courrier.pied=this.pied;
  this.courrier.logo=this.url1;
  this.courrier2.titre=this.titre;
  this.courrier2.objet=this.objet;
  this.courrier2.entet=this.entete;
  this.courrier2.pied=this.pied;
  this.courrier2.logo=this.url1;
  this.courrier2.langue=this.langue;
  this.courrier2.identifier='courrier number1';
}
}
