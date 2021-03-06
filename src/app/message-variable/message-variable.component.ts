import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import xml2js from 'xml2js';  
import * as XLSX from 'xlsx';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Directive,HostListener } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { UserService } from '../service/user.service';
import { MessagevariableService } from '../service/messagevariable.service';
import { Router } from '@angular/router';
import { Messagevariables } from '../model/messagevariable.model';
import { Message } from '../model/message.model';
import { Messageenvoyer } from '../model/messageenvoyer.model';
import { Facture } from '../model/facture.model';
import { FactureService } from '../service/facture.service';
import { Messsage } from '../model/messsage.mode';
import { MessageService } from '../service/message.service';


const httpOptions = { 
  headers: new HttpHeaders( {'Content-Type': 'text/json'} ) };
@Component({
  selector: 'app-message-variable',
  templateUrl: './message-variable.component.html',
  styleUrls: ['./message-variable.component.css']
})

export class MessageVariableComponent implements OnInit {
  data:[][];
  conteur=0;
  urlfin="";
  localUrl="";
  langue="francais";
  nomcsv="";
  status=0;
  nomfilvcard="";
  urlvcard="Desktop/apiplatform/public";
  urlvcard2="Desktop/apiplatform/public/mypdf1.pdf"
  messageenv : String;
  mymessage =new Messageenvoyer;
  apiURL: string = 'https://127.0.0.1:8000/api/messagevs'; 
  excelObservable: Observable<Messagevariables>;
  @Output() eventEmitter = new EventEmitter();
  newmessage = new Messagevariables(); 
  constructor(private messageservice :MessageService,private servicefacture :FactureService,private messageserver: MessagevariableService,private http : HttpClient
    ,private router: Router,) { }

  ngOnInit(): void {
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
  onItemChange(value){
    console.log(" Value is : ", value );
    this.langue=value;
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
chargermessag(){
  //for(a in)
// this.newmessage.idClient=Number(localStorage.getItem('iduser'));
      //this.newmessage.numeroDossier=d[0]['numeroDossier'];                     
      //this.newmessage.telClient=d[0]["tel_client"];
      //this.newmessage.telGest=String(d[0]["tel_gest"]);
  this.newmessage.idClient=0;
  this.newmessage.numeroDossier=this.excelObservable[0]['numeroDossier'];                     
  this.newmessage.telClient=this.excelObservable["tel_client"];
  this.newmessage.telGest=this.excelObservable["tel_gest"];
  console.log("hada test dyal lmard");
  console.log(this.excelObservable[0]["numeroDossier"]);
  console.log(this.excelObservable);
}
addmessag(){
this.excelObservable.subscribe((d) => {
  for(var i = 1; i <= 10; i++){
  console.log('hadi d8');
  //this.newmessage.idClient=Number(localStorage.getItem('iduser'));
  //this.newmessage.numeroDossier=d[0]['numeroDossier'];                     
  //this.newmessage.telClient=String(d[0]["tel_client"]);
  //this.newmessage.telGest=String(d[0]["tel_gest"]);
  console.log('hadi d mzssag dyalna');
  console.log('hadi l conteu2DDDr');
  //console.log(d[3]);
  //console.log("message nous vous ");
  console.log(this.newmessage);
  console.log("api http");
  console.log(this.apiURL);
 //this.messageserver.ajoutermessagevariable(d[0]).then(prod => {      
 //console.log(prod); 
 //}); 
 this.http.post<any>(this.apiURL,
  d[i], httpOptions).toPromise().then(data => {
 console.log("rsulta2 of messsage variable");
 console.log(data);
});
}  
  alert("votre message bien enregistrer,retourn ver votre profil");
   this.router.navigate(['home']);   
});
   //alert("votre utilisateur bien ajout??");
 }
 selectfil($event){
  console.log("hh");
  if($event.target.files){
   var url3=$event.target.value;
  console.log('path',url3);
  var reader =new FileReader();
  console.log("ma3rfc");
  reader.readAsDataURL($event.target.files[0]);
 console.log( 'hada ma3arfooch',reader.readAsDataURL($event.target.files[0]));
  reader.onload=(ev:any)=>{
    var formData: any = new FormData();
    formData.set("path",url3);
    formData.set("contac","contact78999.vcf");
    console.log("fin url");
    console.log(formData);
    //this.http.post('https://127.0.0.1:8000/api/books',httpOptions).subscribe();;
  }
}
}
changeListener(files: FileList){
  console.log(files);
  if(files && files.length > 0) {
     let file : File = files.item(0); 
       console.log(file.name);
       console.log("sizee iz ",file.size);
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

        console.log("all text ligne",allTextLines.length);
        this.nembremessage=String(allTextLines.length-1);
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
  //this.notrevariable.push(null);
console.log("notre variable ==",this.lines);
}
//array varibales to store csv data
lines = []; //for headings
linesR = []; // for rows
nembremessage="";
selectedDevice="";
vcardselected="";
positionvcardselected :Number;
//File upload function
selectText(newValue2) {
  console.log(newValue2);
this.vcardselected=newValue2;
console.log('vcard selecte',this.vcardselected);
let ll=0;
this.lines[0].forEach(element => {
  if(element===this.vcardselected){
    this.positionvcardselected=ll;
  }
  ll=ll+1;
  
});
console.log('position vcard is ',this.positionvcardselected);
  //console.log("hellow",this.ckEditorBlurEle);
  //var selection = event.editor.getSelection();
  //this.ckEditorBlurEle.editor.insertHtml("[#"+newValue2+"#]");
    //this.myEditor.instance.insertText(value);
}
Vcard2(){
  var formData: any = new FormData();
  formData.set("path",this.urlfin);
  formData.set("nomfilecsv",this.localUrl);
  formData.set("filevcard", this.nomfilvcard);
  formData.set("positionvcard", this.positionvcardselected);
  console.log("fin url uopload commen");
  console.log(formData);
 this.http.post<any>("http://127.0.0.1:8000/api/vcard",
  formData).subscribe(
    (response) => console.log(response[0]),
    (error) => {  console.log(error["status"]),
   this.status=error["status"];
   this.urlvcard=this.urlvcard+"/"+this.nomfilvcard;
   console.log("vcard file est ",this.urlvcard);
  }

    //var t=response;
    
    //console.log('ded')
    //alert(error);
    //console.log("djekd")
  );

 /* this.http.post<any>("https://127.0.0.1:8000/api/vcard",
  formData).toPromise().then(data => {
    console.log("rsulta2");
   // localStorage.setItem('iduserrole',String(data['id'])); 
    //alert("le code est " , String(data['id']));
    console.log(data["status"]);
  }); */


  //this.messagefile();
}
Vcard(){
  var formData: any = new FormData();
  formData.set("path",this.urlfin);
  formData.set("nomfilecsv",this.localUrl);
  formData.set("filevcard", this.nomfilvcard);
  formData.set("positionvcard", this.positionvcardselected);
  console.log("fin url uopload commen");
  console.log(formData);
let parsedData;
  const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  const requestOptions: Object = {
    headers: headers,
    responseType: 'text'
  }
 this.http.get<any>("http://127.0.0.1:8000/api/send",requestOptions).subscribe(
    (response) =>{ console.log("hoola",response) 
    ,parsedData = JSON.parse(response),
    console.log("vcard file est ",parsedData.data);
  },
    (error) => {  console.log(error["status"]),
   this.status=error["status"];
   this.urlvcard=this.urlvcard+"/"+this.nomfilvcard;
  }
  );
}
precedent(){
  this.router.navigate(['crcomapgne']);
  localStorage.setItem('routeprecedent','true');

}
Suivant(){
 // this.charger();
//localStorage.setItem()=this.contentmessage;
localStorage.setItem('taillemessage',String(this.contentmessage.length));
localStorage.setItem('unitefacture','0.60')
  this.facture.nembremessageenv=Number(localStorage.getItem("nembreligneofdatatcompagne"));
  console.log('nombre des message is ', this.facture.nembremessageenv);
  var total=0.60*Number( this.facture.nembremessageenv);
  console.log('total is ',total);
  this.facture.totale=String(total)
  localStorage.setItem('facturetotalcompagne',String(total))
  this.addmessage();
  this.router.navigate(["resume"]);
}
facture=new Facture();
charger(){
  console.log("charge gooo")
  var date=new Date().toISOString();
  this.facture.datecreation=String(date);
  this.facture.iduser=localStorage.getItem('iduser');
  this.facture.idboss=localStorage.getItem('idclient');
  this.facture.nembremessageenv=Number(this.nembremessage);
  this.facture.unite="0.60";
  this.facture.typemessageenv="message avec variable";
  this.facture.nomuser=localStorage.getItem("nomuser")+" "+localStorage.getItem('prenomuser');
  var total=0.60*Number(this.nembremessage);
  console.log('total is ',total);
  this.facture.totale=String(total);
  this.servicefacture.ajouterfacture(this.facture);}
messsage=new Messsage();
contentmessage='';
addmessage(){
  this.messsage.iduser=localStorage.getItem("iduser");
  localStorage.setItem('contentmessageCompagne',this.contentmessage);
  this.messsage.content=this.contentmessage;
  this.messsage.idcompagne=localStorage.getItem("idcompagnenew");
  this.messsage.langue=this.langue;
  localStorage.setItem("languemessagecompagne",this.langue);
  this.messsage.typemessage='message avec variable';
  this.messageservice.ajoutermessage(this.messsage);
}




messagefile(){
  var formData2 : any = new FormData();
  formData2.set("path",this.urlfin);
  formData2.set("nomfilecsv",String(this.localUrl));
  formData2.set("filevcard", this.nomfilvcard);
  formData2.set("had file vcarfilevcard", this.nomfilvcard);
  console.log("fin url uopload commen",this.localUrl);
  console.log(formData2);
  this.http.post<any>("https://127.0.0.1:8000/api/wathssap",formData2).subscribe(
    (response) => console.log(response[0]),
    (error) => console.log(error)
  );
}


 envoyermessage(){
   console.log(this.mymessage);
   console.log("conteur");
   console.log(this.conteur);
   this.excelObservable.subscribe((d) => {
   for(var i = 0; i <= this.conteur; i++){
     console.log('hadi nmra dyal client ');
     console.log(String(d[i]["telClient"]));
  this.mymessage.phone=String(d[i]["telClient"]);
  console.log(this.mymessage.body);
  console.log("hadi nmraaa");
  console.log(this.mymessage.phone);
  console.log(this.mymessage);
   this.messageserver.envoyerm(this.mymessage).then(prod => {      
   console.log(prod); 
   }); 
   }

  });




  
 }


 envoyermessage2(){
   console.log(this.mymessage);
   console.log("conteur");
   console.log(this.conteur);
     console.log('hadi nmra dyal client ');
     console.log(String("212682962462"));
  this.mymessage.phone=String(String("212682962462"));
  this.mymessage.body="hooollallaa";
  console.log("had message boudy",this.mymessage.body);
  console.log("hadi nmraaa");
  console.log(this.mymessage.phone);
  console.log(this.mymessage);
   this.messageserver.envoyermessagewathsap(this.mymessage).then(prod => {      
   console.log(prod); 
   }); 
   




  
 }




























  /*getFile(event: any) {
    const target : DataTransfer =  <DataTransfer>(event.target);
    
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname : string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      console.log(ws);

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

      console.log(this.data);

      let x = this.data.slice(1);
      console.log(x);
    };
    reader.readAsBinaryString(target.files[0]);
  }*/
}

/*import { Component, OnInit } from '@angular/core';
import * as xlsx from 'xlsx';
@Component({
  selector: 'app-message-variable',
  templateUrl: './message-variable.component.html',
  styleUrls: ['./message-variable.component.css']
})
export class MessageVariableComponent implements OnInit {
  file: any;
  constructor() { }
  getFile(event: any) {
    this.file = event.target.files[0];
    
    const classe = {
      libelle: null,
      ecole: null,
      date_creation: null,
      nbre_etudiant: null
    };
    
    this.fileReader(this.file, classe);
  }


  private fileReader(file: any, line: any) {
    let fileReader = new FileReader();

    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      const data = new Uint8Array(this.arrayBuffer);
      const arr = new Array();

      for (let i = 0; i !== data.length; i++) {
        arr[i] = String.fromCharCode(data[i]);
      }

      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary', cellDates: true });
      const first_sheet_name = workbook.SheetNames[0];

      const worksheet = workbook.Sheets[first_sheet_name];
      this.worksheet = XLSX.utils.sheet_to_json(worksheet, { raw: true });

      /**
       * Call matching function
       
       this.matchingCell(this.worksheet, line);
      };
      fileReader.readAsArrayBuffer(file);
    }
  
  
    private matchingCell(worksheet: any, monTab: any; line: any) {
      monTab.value = [];
   
      for (let i = 0; i < worksheet.length; i++) {
        const worksheetLine = worksheet[i];
        const updatedLine = {
          libelle: worksheet['LIBELLE'],
          ecole: worksheet['ECOLE'],
          date_creation: worksheet['CREATION'],
          nbre_etudiant: worksheet['NBRE_ETUDIANT']
        };
        line = {..line, ...updatedLine};
        monTab.value.push(line);
      }
    }
  }
  
  
  
  
  
    ngOnInit(): void {
  
  
  
    }
  
  }
*/  

