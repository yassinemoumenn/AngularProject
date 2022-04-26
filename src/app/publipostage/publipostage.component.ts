import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { CourierService } from '../service/courier.service';
import { CourrierService } from '../service/courrier.service';
import { Courier } from '../model/courier.model';
@Component({
  selector: 'app-publipostage',
  templateUrl: './publipostage.component.html',
  styleUrls: ['./publipostage.component.css']
})
export class PublipostageComponent implements OnInit {
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
  teml=1;
  objet="";
 //url1="data:image/gif;base64,R0lGODlhWAAfANUAANPeKpeUltrhJN/kXqWio1IwIi0xKdHPz3BtbvBvIvj49wUEBU1LTKy0OdZlJY1KKEpRL211ONjgKImSOqlVKNrhOOzr69jgLjomHre/NtXfKJylOsHJNSkYFnyDOdLbL9fgJ7GvsM7XM1tjNJWdO+PkGTpBKeDjI87SK289JcJeJtfgLSEjH9vhKNzhIb+9vHt3eT48PsXNMNrfLtva2YeEh"
 //url1="data:image/gif;base64,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" 
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
    constructor(private courierservice2: CourierService,
      private courierservice: CourrierService,private http : HttpClient
      ,private router: Router) { }
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
      }
      devices = 'one two three'.split(' ');
      selectedDevice = '';
      onChange2(newValue) {
        this.titre=newValue;
      console.log(newValue);
       this.getcourreir(this.titre);
    /* console.log(this.courriers[newValue-1].titre);
      this.selectedDevice = newValue;
      this.titre=String(this.courriers[newValue-1].titre);
      this.entet=String(this.courriers[newValue-1].entet);
      this.pied=String(this.courriers[newValue-1].pied);
      this.content=String(this.courriers[newValue-1].content);
      this.objet=String(this.courriers[newValue-1].objet);
      this.logo=String(this.courriers[newValue-1].logo);
      this.langue=String(this.courriers[newValue-1].langue);
      console.log("logo base donnne",this.logo);*/
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
        this.langue=String(cur.langue);
        console.log("logo",this.logo);
        console.log("objet",this.objet);
        console.log('contentent',this.content);
        console.log('pied',this.entet);
        console.log('entet',this.entet);
      }
     })
   }
  publipostage(){
    var formData: any = new FormData();
    formData.set("path",this.urlfin);
    formData.set("nomfilecsv",this.localUrl);
    formData.set("filevcard", this.nomfilvcard);
    formData.set("titre", this.titre);
    formData.set("objet", this.objet);
    formData.set("pied", this.pied);
    formData.set("entet", this.entet);
    formData.set("content", this.content);
    formData.set("logo", this.logo);
    formData.set("langue", this.langue);
    console.log("logo 222",this.localUrl);
    console.log("2");
    console.log("fin url nuopload commen");
    console.log(formData);
    alert("Entrain de traitement2");
    this.http.post<any>("https://127.0.0.1:8001/api/publipostage",
    formData).subscribe(
      (response) => console.log(response["HttpErrorResponse"]["status"]),
      (error) =>{ 
      console.error(error);
      this.statuzs=error["status"];
      if (this.statuzs==200) {
        alert("Les fichiers PDF bien construire, vérifier votre dossier public");
        this.router.navigate(["home"]);
      }


    }
      
    );
  
   // this.messagefile();
  }
  onSuccess(data: any){
    alert("good job");
  }

}
