import { Component, OnInit } from '@angular/core';
import { Courrier } from '../model/courrier.model';
import { CourrierService } from '../service/courrier.service';
import * as jsPDfF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { CourierService } from '../service/courier.service';
import { Courier } from '../model/courier.model';
@Component({
  selector: 'app-templatecourrier',
  templateUrl: './templatecourrier.component.html',
  styleUrls: ['./templatecourrier.component.css']
})
export class TemplatecourrierComponent implements OnInit {
  courriers : Courier[];
  titre="";
  teml=1;
  objet="";
 //url1="data:image/gif;base64,R0lGODlhWAAfANUAANPeKpeUltrhJN/kXqWio1IwIi0xKdHPz3BtbvBvIvj49wUEBU1LTKy0OdZlJY1KKEpRL211ONjgKImSOqlVKNrhOOzr69jgLjomHre/NtXfKJylOsHJNSkYFnyDOdLbL9fgJ7GvsM7XM1tjNJWdO+PkGTpBKeDjI87SK289JcJeJtfgLSEjH9vhKNzhIb+9vHt3eT48PsXNMNrfLtva2YeEh"
 //url1="data:image/gif;base64,R0lGODlhWAAfANUAANPeKpeUltrhJN/kXqWio1IwIi0xKdHPz3BtbvBvIvj49wUEBU1LTKy0OdZlJY1KKEpRL211ONjgKImSOqlVKNrhOOzr69jgLjomHre/NtXfKJylOsHJNSkYFnyDOdLbL9fgJ7GvsM7XM1tjNJWdO+PkGTpBKeDjI87SK289JcJeJtfgLSEjH9vhKNzhIb+9vHt3eT48PsXNMNrfLtva2YeEhhUTE11bXGZkZdbfK9fgKNfgK9ffKdfgKf///9fgKiH5BAAAAAAALAAAAABYAB8AAAb/wJ9QIiwafzneEcnLIYu5nXBH3a2ql2xlyx14v+CweDyuDCS95THpXBPV8Gl1Pp+usvi8Ps/tV6RCOW9vS4JJcUhsT4GIjY6Paj0Sk2mFTYuFgpCbnJhwOYagRJNGmkdWVZ2RlapwVK1rl22epWs/lEOTumhxrLmEj8CNprDFta2SLbzGjz2+sLOcPS0i1S0CJy49Saw8sjwSSrc5kodJ2SBNEi4tLS4CAjpNUebePFI7PQIu2fuszkio3DvESEAEFggjcBjhAQSAhwBAhNOgQYKGHAIAiHo4SSOADyNGcBDQ4kMECCZGbNjwQQMADSteXsyxguJFCQ08eNjQgAQA/0k6fqzoMRMmxTs5NIDI0CHFgxQdWHSwMaFECRfp9gnYAcDFux7vALjLyK/EBBs2IJRoYcJGjBgGbCyAICCcEHg/1GEVMAItC7QLIqyVeC0vCJIgDgtIqmEDhgSQVSxQkcLACAgjMpgcQeKEgAkRMqyI4EFABs4iIjAckUKyCRMGDvjw8SIGAaoY4WWQ0a5FBpYkbNSwYCFAjAAsdpLMkKGdaZ8feCbO4ThBigIJChTAsAADhg4G4nZYcNlvW6omFrCIi0EuBQfahSuAgYDBDR8sFhhowOF8BJByhYcDbS/AcIMFfy3gwQgLpGWSXLAtQB4PLlTHHXwUFJACZAnYgP+BAwk8sEAHKli3wFMGfFhAByA6gMEDHKZAwAESLnCDAiHUhpABBMBgQ1w1hMDAAjnWeJ8CFiCgXwDIIQRDCG6FUIMNKlVXwGQpOPCAAxRcZ4MDKlCQAAbvlVhAlyla996WFLyXAlQDHhCCAff5YIEPBrCgwGwELBCAAjQoYAAMFsAw5I0vvHDDArL5QMMCA77AAKA+ELCehVg60BqX2o054mNXhokmC9Zlt0CWFEgmIQsB0FDpjQzY8EINhNLpw6Sz+oBcozjcQINcCzBggQEx+IBDgQvU4EMNL+C5gJU2ZKcpBiqAuCF33XnaJgUiPpYlBgYUwKUDEgK7QAw0IID/IAs1EOCuegrUsOdsITRoQAAHIPCohAjUyyi+BixAwGyzxWBDddW6qGlTMKLa2mMPYBexmtllFy5lIT5AAZ03BPCCuuvVEMBwLNwn7Mc4/IVQDTRMykAMMOAwbAzzHRDDAjD4AIOhCG3AYgLwLWAdjEAvgF0Ckm0I9HglWhctBiaIawPRDww4W6/43UuAAQrs2WfOukJKcA0CzyboAXvSYIAFcK3tgwIxoOABCgGPF953HWwHnlRXxqVdBynZsKINUiVnQ1QeXunWW/qlDAEDQzIg5Xo23FDDzQbUUAMChNsAQw0BGxDC1jbaQIIJ7OJgegS+ReA6Bw2khJIJEMiQ/wEEBkQwwwawjSDCCRHQ3kDsnXkAQQMTvKbaayZ4kJ5CeUYQF5UrePCXCSRMb0MEIvRlgwkbQNAgZmm50B/hEHzPAwgnZCNBC4e5wIMG7HjWVQ6HrQMC/fs41wL9F3nHOlwwgx+AwAUf4EA6ZCADF6ygARkAwQpAkECMiIA5MtgfCDiQAQAI4APDUwoHIiIAHnDgAy3gwAwowgYN8AAAQXnIFR4Cvxw8ZCagoAhRLuIQl9zQJiwER1J6sD9wSIAxSklCYnSwGB6CICm5oYgOQLCD+R2GfU+cXw4u8BJQiGIHNsRfRbh4hTBW8Qc7uEgax7gCIiThImpUQg/u0YQV8P/gCmjEBxNceIU0DIUKK1iBDnpAhRyGsQnOWOIUQbBIHTgyMYxsJCMn6cgpLhKSlaykIh/ZSGc40pPO6EEmR+lIe0RSk/vzoibscYlEzDEJ9siLEu6whzzM4AISuMAVAOGMWBojGkbgwRw/KcrE7OACRJxiGkQJkB4E8gJ90EIFdCmFPh5hEnU5pi474YtnAGQJrGwDKF7JSlkKpZYXoIIWsgAIIUiil8wAZhGEKQ4jgAAokPTkIPe5g0mwsw6vqMQzsEmEVzCjGONsQjm9cc498LKZ3/yBPuoCDFJEwggDtWgn7inKQaJBB7r4ZxUkEFA06sOk2ZREXRohgZXGQZ4Gj6inE4IAADs=" 
 //url2="data:image/gif;base64,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"
  selectedSkill;
  content="";
  test="99";
  logo="";
  langue="";
  html="<p>hada test de html</p>";
  //html2=htmlstrin;
  pied="";
  entet="";
  pdffilepath="";
  constructor(private courierservice2: CourierService,private courierservice: CourrierService,private router :Router) { }
  ngOnInit(): void {
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
         devices = 'one two three'.split(' ');
         selectedDevice = '';
         onChange(newValue) {
          console.log(newValue);
          console.log(this.courriers[newValue-1].titre);
          this.selectedDevice = newValue;
         this.titre=String(this.courriers[newValue-1].titre);
         this.entet=String(this.courriers[newValue-1].entet);
         this.pied=String(this.courriers[newValue-1].pied);
         this.content=String(this.courriers[newValue-1].content);
         this.objet=String(this.courriers[newValue-1].objet);
         this.logo=String(this.courriers[newValue-1].logo);
         this.langue=String(this.courriers[newValue-1].langue);
         console.log("logo base donnne",this.logo);
         console.log('pied',this.pied);
      }
      imprimerpdf(){
        for (let index = 0; index < 2; index++) {     
          this.pdffilepath="telecharge",index,".pdf";
        console.log('holla',index);
        this.test=String(index);
        //console.log('holla',nom);
         var data = document.getElementById('pdf2');
         html2canvas(data).then(canvas => {
         var imgWidth = 208;
         var pageHeight = 295;
         var imgHeight = canvas.height * imgWidth / canvas.width;
         var heightLeft = imgHeight;
         const contentDataURL = canvas.toDataURL('image/png')
         let pdf = new jsPDfF.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
         var position = 1;
         this.test=String(index);
         pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
         pdf.save(this.pdffilepath); // Generated PDF
       });
      }
     }
     imprimerpdf2(nom,prenom){
      for (let index = 0; index < 2; index++) {     
        this.pdffilepath="telechbarge",index,".pdf";
        this.test=String(index);
      console.log('holla',nom);
      console.log("test",this.test);
       var data = document.getElementById('pdf2');
       html2canvas(data).then(canvas => {
       var imgWidth = 208;
       var pageHeight = 295;
       var imgHeight = canvas.height * imgWidth / canvas.width;
       var heightLeft = imgHeight;
       const contentDataURL = canvas.toDataURL('image/png')
       let pdf = new jsPDfF.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
       var position = 0;
       pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
     });
    }
   }
     imprimerall(){
       
     }
     creercopier(){
      console.log("router vers sformat modifer");
       localStorage.setItem("routemodifier",String(1));
       localStorage.setItem('objetmodifier',this.objet);
       localStorage.setItem('titremodifier',this.titre);
       localStorage.setItem('logomodifier',this.logo);
       localStorage.setItem('piedmodifier',this.pied);
       localStorage.setItem('entetmodifier',this.entet);
       localStorage.setItem('languemodifier',this.langue);
       this.router.navigate(["format"]);
     }
     vue(courrier:Courier){
       console.log('toto',courrier.titre);
       localStorage.setItem('objetview',String(courrier.objet));
       localStorage.setItem('titreview',String(courrier.titre));
       localStorage.setItem('logoview',String(courrier.logo));
       localStorage.setItem('piedview',String(courrier.pied));
       localStorage.setItem('entetview',String(courrier.entet));
       localStorage.setItem('langueview',String(courrier.langue));
       localStorage.setItem('contentview',String(courrier.content));

       this.router.navigate(["viewcourrier"]);

       //localStorage.setItem("cour",courrier);
       //this.teml=1;
     }
     deletecourrier(id:Number){
      console.log('supprimer',id);
      this.courierservice2.supprimercourrier(id);
      alert("vous avez suprimer le courrier :"+id);
      this.courierservice2.listcourrier().subscribe(prods => {    
        console.log("prdfin")  ;  
        console.log(prods);      
             this.courriers = prods["hydra:member"]; 
             console.log(this.courriers); 
             },
             err => {
               alert("problem d acce a l api");
             });
    }
    edit(courrier:Courier){
      console.log("router vers sformat modifer");
      localStorage.setItem("routemodifier",String(1));
      localStorage.setItem('objetmodifier',String(courrier.objet));
      localStorage.setItem('titremodifier',String(courrier.titre));
      localStorage.setItem('contentmodifier',String(courrier.content));
      localStorage.setItem('logomodifier',String(courrier.logo));
      localStorage.setItem('piedmodifier',String(courrier.pied));
      localStorage.setItem('entetmodifier',String(courrier.entet));
      localStorage.setItem('languemodifier',String(courrier.langue));
      this.router.navigate(["format"]);
      //this.teml=1;
    }
}
