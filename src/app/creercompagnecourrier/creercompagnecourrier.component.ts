import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Courier } from '../model/courier.model';
import { CourierService } from '../service/courier.service';
import { CourrierService } from '../service/courrier.service';
import * as XLSX from 'xlsx';
import { Messageenvoyer } from '../model/messageenvoyer.model';
import { Messagevariables } from '../model/messagevariable.model';
import { HttpClient } from '@angular/common/http';
import { CompagneService } from '../service/compagne.service';
import { Compagnecsv } from '../model/compagnecsv.model';
import { base64StringToBlob } from 'blob-util';

@Component({
  selector: 'app-creercompagnecourrier',
  templateUrl: './creercompagnecourrier.component.html',
  styleUrls: ['./creercompagnecourrier.component.css']
})
export class CreercompagnecourrierComponent implements OnInit {
  courriers : Courier[];
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
  langue="";
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
notrevariable = [];
  mymessage =new Messageenvoyer;
  apiURL: string = 'https://127.0.0.1:8000/api/messagevs'; 
  excelObservable: Observable<Messagevariables>;
  @Output() eventEmitter = new EventEmitter();
  newmessage = new Messagevariables(); 
  constructor(private courierservice2: CourierService,private http : HttpClient,
    private compagneservice : CompagneService,private courierservice: CourrierService,private router :Router) { }
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
           this.compagneservice.getcollectiocompagnecsv().subscribe(prods => {    
            console.log("les compagne")  ;  
            console.log(prods);      
                 //this.user2 = prods[4];
                 this.compagnecsv = prods["hydra:member"]; 
                 console.log(this.compagnecsv); 
                // alert("goo");
                 },
                 err => {
                   alert("problem d acce a l api");
                 });
                 

         }
         devices = 'one two three'.split(' ');
         selectedDevice = '';
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
   this.excelObservable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    
    this.excelObservable.subscribe((d) => {
      console.log('hadi d3');
      console.log(d[0]);
     console.log('hadi d mzssag dyalna');
     console.log( this.newmessage.idClient);
      this.eventEmitter.emit(d);
    });
    console.log(this.positionnom,this.positionage,this.positiongestion,
      this.positionnumber,this.positionprenom,this.positionadress,
      this.positionnumerodossier);
  }


  checkAll(ev) {
    this.linesR.forEach(x => x.state = ev.target.checked)
  }
  
  isAllChecked() {
    return this.linesR.every(_ => _.state);
  }
  
 

  changeListener(files: FileList){
    console.log(files);
    if(files && files.length > 0) {
       let file : File = files.item(0); 
         console.log(file.name);
         console.log(file.size);
         console.log(file.type);
         //File reader method
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
          let csv: any = reader.result;
          let allTextLines = [];
          allTextLines = csv.split(/\n/);
         //Table Headings
          let headers = allTextLines[0].split(',');
          let data = headers;
          let tarr = [];
          for (let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }
          //Pusd headings to array variable
          console.log("tarr",tarr);
          this.lines.push(tarr);
          
         
          // Table Rows
          let tarrR = [];
          
          let arrl = allTextLines.length;
          let rows = [];
          for(let i = 1; i < arrl; i++){
          rows.push(allTextLines[i].split(','));
         
          }
          
          for (let j = 0; j < arrl; j++) {
      
              tarrR.push(rows[j]);
              
          }
         //Push rows to array variable
          this.linesR.push(tarrR);
      }
    }
    this.notrevariable=this.lines;
    //this.notrevariable.push(null);
console.log("notre variable ==",this.lines);
  }
readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = (e) => {
      const bufferArray = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bufferArray, { type: 'buffer' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      subscriber.next(data);
      subscriber.complete();
      console.log("had toool");
      this.conteur=data.length;
      console.log(data.length);
      
    };
  }
  positionnom=100;
  positionprenom=100;
  positionage=100;
  positionadress=100;
  positionnumber=100;
  positiongestion=100;
  positionnumerodossier=100;
  positionemail=100;
         onChange2(newValue) {
           this.titre=newValue;
         console.log(newValue);
          this.getcourreir(this.titre);
        }

        onChange4(newValue) {
          //this.titre=newValue;
        console.log(newValue);
       this.getcompagne(newValue);
       }
        item2="";
onChange3(newValue,it,l) {
 
if(newValue=="nom"){
  this.positionnom=l;  
if( this.positionprenom==l){this.positionprenom=100} if( this.positionage==l){this.positionage=100}
if( this.positionnumber==l){this.positionnumber=100} if( this.positionemail==l){this.positionemail=100}
 if( this.positiongestion==l){this.positiongestion=100} if( this.positionnumerodossier==l){this.positionnumerodossier=100}  
 if( this.positionadress==l){this.positionadress=100}   

 }
if(newValue=="prenom"){
  this.positionprenom=l;  
if( this.positionnom==l){this.positionnom=100} if( this.positionage==l){this.positionage=100}
if( this.positionnumber==l){this.positionnumber=100} if( this.positionemail==l){this.positionemail=100}
 if( this.positiongestion==l){this.positiongestion=100} if( this.positionnumerodossier==l){this.positionnumerodossier=100}  
 if( this.positionadress==l){this.positionadress=100}   
}
if(newValue=="age"){
  this.positionage=l;
  if( this.positionnom==l){this.positionnom=100} if( this.positionprenom==l){this.positionprenom=100}
  if( this.positionnumber==l){this.positionnumber=100} if( this.positionemail==l){this.positionemail=100}
   if( this.positiongestion==l){this.positiongestion=100} if( this.positionnumerodossier==l){this.positionnumerodossier=100} 
   if( this.positionadress==l){this.positionadress=100}}
if(newValue=="adress"){
  this.positionadress=l;
  if( this.positionnom==l){this.positionnom=100} if( this.positionprenom==l){this.positionprenom=100}
  if( this.positionnumber==l){this.positionnumber=100} if( this.positionemail==l){this.positionemail=100}
   if( this.positiongestion==l){this.positiongestion=100} if( this.positionnumerodossier==l){this.positionnumerodossier=100}
  if(this.positionage==l){this.positionage==100}
  }
if(newValue=="number"){
  this.positionnumber=l;
  if( this.positionnom==l){this.positionnom=100} if( this.positionprenom==l){this.positionprenom=100}
  if( this.positionadress==l){this.positionadress=100} if( this.positionemail==l){this.positionemail=100}
   if( this.positiongestion==l){this.positiongestion=100} if( this.positionnumerodossier==l){this.positionnumerodossier=100}
  if(this.positionage==l){this.positionage==100}
 

 }
if(newValue=="numerodossier"){

  this.positionnumerodossier=l; 
  if( this.positionnom==l){this.positionnom=100} if( this.positionprenom==l){this.positionprenom=100}
  if( this.positionadress==l){this.positionadress=100} if( this.positionemail==l){this.positionemail=100}
   if( this.positiongestion==l){this.positiongestion=100} if( this.positionnumber==l){this.positionnumber=100}
  if(this.positionage==l){this.positionage==100}
 

}
if(newValue=="gestion"){
  this.positiongestion=l; 
  if( this.positionnom==l){this.positionnom=100} if( this.positionprenom==l){this.positionprenom=100}
  if( this.positionadress==l){this.positionadress=100} if( this.positionemail==l){this.positionemail=100}
   if( this.positionnumerodossier==l){this.positionnumerodossier=100} if( this.positionnumber==l){this.positionnumber=100}
  if(this.positionage==l){this.positionage==100}
}
if(newValue=="email"){
  this.positionemail=l; 
  if( this.positionnom==l){this.positionnom=100} if( this.positionprenom==l){this.positionprenom=100}
  if( this.positionadress==l){this.positionadress=100} if( this.positiongestion==l){this.positiongestion=100}
   if( this.positionnumerodossier==l){this.positionnumerodossier=100} if( this.positionnumber==l){this.positionnumber=100}
  if(this.positionage==l){this.positionage==100}
 
}
if(newValue=="null"){
//for (let nn = 0; nn< 5; nn++) {
  //if(l==nn){
    console.log("nous somme dans le test de null");
    if(this.positionnom==l)
    {
    
      this.positionnom==100; 
    console.log("nbom vas devien null") ;
    }
      if(this.positionprenom==l)
      {
        console.log("la position prenom devien null");
        this.positionprenom==100;   
       }
        if(this.positionnumber==l)
        {
          console.log("la position number devien null");
          this.positionnumber==100;    }
          if(this.positionage==l)
          {
            this.positionage==100;    }
            if(this.positionadress==l)
            {
              this.positionadress==100;    }
              if(this.positionnumerodossier==l)
              {
                this.positionnumerodossier==100;    }
                if(this.positiongestion==l)
                {
                  this.positiongestion==100;    }
                  if(this.positionemail==l)
                  {
                    this.positionemail==100;    }

  //}
//}
}
console.log("prenom",this.positionnom,"age",this.positionage,"gestion",this.positiongestion,
"number",this.positionnumber,"prenom",this.positionprenom,"adress",this.positionadress,
"dossier", this.positionnumerodossier,"email",this.positionemail);
       // console.log(this.positionnom,this.positiongestion,this.positionnumerodossier,this.positionnumerodossier)
         //console.log("this valu,",newValue,"est conecr ",it);
         //console.log("la position de ",newValue,"est ",l);
       }

       getcompagne(titre){
         console.log("gooooooooooooooooo");
        this.compagnecsv.forEach((cur) => {
          //console.log("1",newValue,"2",cur.titre)
       if (titre==cur.nom) {
            console.log("idc okkk",cur.nom);
            this.datafilecsv=String(cur.datafilecsv);
            this.localUrl=String(cur.datafilecsv);;
            console.log("data",this.datafilecsv);
            const contentType = 'application/vnd.ms-excel';
            let filere:FileReader=new FileReader();
         // filere.readAsDataURL(String(readAsDataURL));
            var formData2: any = new FormData();
            formData2.set("data",this.datafilecsv);
          /*  this.http.post<any>("https://127.0.0.1:8001/api/compCont",
            formData2).subscribe(
            (response) => console.log(response["HttpErrorResponse"]["status"]),
            (error) =>{ 
            console.error(error);
              this.statuzs=error["status"];
              if (this.statuzs==200) {
               // alert("Les fichiers PDF bien construire, vérifier votre dossier public");
                //this.router.navigate(["home"]);
              }
        
        
            }
            );*/
            this.datafilecsv = this.datafilecsv.replace('data:image/png;base64,', '')
            .replace('data:application/vnd.ms-excel;base64,', '')
            .replace('data:image/gif;base64,', '');
           const d="bm9tICxwcmVub20sYWdlLGFkcmVzcyxlbWFpbCxudW1iZXINCkFub3VhcixnbWlsaSwyMyxmZXMsImFub2lyLmdtaWxpQGdtYWlsLmNvbSIsMDk4NzY1NDMNCkZhdGksZmF0aW1hLDIyLHNlZnJvdSwiZmF0Z21haWwuY29tIiwwNjU0MzQyMzEyDQprYXJpbSxnaGFmb2wsMjAsZmVzLCJrYXJpbUBnbWFpbC5jb20iLDA3NjU4NzU0MzINCmFkaWwsb3Vzc2lkaSwyMyxmZXMsImFkaWxAZ21haWwuY29tIiwwOTY3NTQzNDU2DQo="
            const fileblob = base64StringToBlob(this.datafilecsv, contentType);
           console.log("fileblob",fileblob);
            //const url = window.URL.createObjectURL(fileblob);
           // console.log("url,",url);
            const file = new File([fileblob], "file.csv", { type: 'application/vnd.ms-excel' });
            let reader: FileReader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
             let csv: any = reader.result;
             let allTextLines = [];
             allTextLines = csv.split(/\n/);
            //Table Headings
             let headers = allTextLines[0].split(',');
             let data = headers;
             let tarr = [];
             for (let j = 0; j < headers.length; j++) {
               tarr.push(data[j]);
             }
             //Pusd headings to array variable
             console.log("tarr",tarr);
             this.lines.push(tarr);
            
             // Table Rows
             let tarrR = [];
             
             let arrl = allTextLines.length;
             let rows = [];
             for(let i = 1; i < arrl; i++){
             rows.push(allTextLines[i].split(','));
            
             }
             
             for (let j = 0; j < arrl; j++) {
         
                 tarrR.push(rows[j]);
                 
             }
            //Push rows to array variable
             this.linesR.push(tarrR);
         }
       
       this.notrevariable=this.lines;
       //this.notrevariable.push(null);
   console.log("notre variable ==",this.lines);
            return cur;
            //this.selectedDevice = newValue;
           // this.titre=String(cur.titre);
          // this.entet=String(cur.entet);
           // this.pied=String(cur.pied);
            //this.content=String(cur.content);
            //this.objet=String(cur.objet);
            //this.logo=String(cur.logo);
            //this.langue=String(cur.langue)
          }
         })
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

         publipostage(){
          console.log("ppppppppppppppprenom",this.positionnom,"age",this.positionage,"gestion",this.positiongestion,
          "number",this.positionnumber,"prenom",this.positionprenom,"adress",this.positionadress,
          "dossier", this.positionnumerodossier);
          //this.localUrl=localStorage.getItem("datafile");
          console.log('data fisssle is ', this.localUrl)
          console.log("header dyalna",this.lines); 
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
   
}
