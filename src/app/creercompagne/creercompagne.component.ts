import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AsyncLocalStorage } from 'async_hooks';
import { Compagne } from '../model/compagne.model';
import { Compagnecsv } from '../model/compagnecsv.model';
import { CompagneService } from '../service/compagne.service';

@Component({
  selector: 'app-creercompagne',
  templateUrl: './creercompagne.component.html',
  styleUrls: ['./creercompagne.component.css']
})
export class CreercompagneComponent implements OnInit {

  constructor(private servicecreecompagne : CompagneService,private router : Router) { }
  compagne=new Compagne();
  compagnecsv=new Compagnecsv();
  variables=["CompagneWhtsApp","Compagne Sms","Diffusion Vocale"];
  typemessage=0;
  typeCompagne="";
  typemessagewathssap="";
  messagsimple=false;
  messagevariable=false;
  messagepiece=false;
  kkk=0;
  ttt=false;
   //= new Date();
  datecreation : string = new Date().toISOString();
  dateshedule="";
  nom="";
  type='';
  nomfilecsv="";
  precede='';
  check1='checked'
  check2='checked3'
  ngOnInit(): void {
    console.log("la date creation initiale",this.datecreation);
this.precede=localStorage.getItem('routeprecedent');
if (this.precede=='true') {
  //localStorage.setItem('routeprecedent','false');
  this.nom=localStorage.getItem('nomcompagne');
  this.type=localStorage.getItem('typecompagne');
  this.typeCompagne=this.type;
  if(this.selectedDevice=='CompagneWhtsApp')
  {
    this.typemessage=1;
    this.typemessagewathssap='true';
  }
}
if(localStorage.getItem('uplpoadprecedent')=='true')
{
  console.log('hollla')
  if(localStorage.getItem('ttt')==='true')
  {this.ttt=true
  this.dateshedule=localStorage.getItem('datecreationcompagne');
  }// event.target.eventListeners.flexCheckChecked.check=false;
} 
 }
  devices = 'one two three'.split(' ');
      selectedDevice = '';
  selectText(newValue2){
    console.log(newValue2);
    //this.type=newValue2;
    if("CompagneWhtsApp"===newValue2){
      this.typemessage=1;
      this.typeCompagne='Compagne WhtsApp';
      this.typemessagewathssap='true';
    }
    else{
      this.typemessage=2;}
    if("Compagne Sms"===newValue2){
      this.typeCompagne='Compagne Sms';
      localStorage.setItem("routertypemessage","sms");
    }
    if("Compagne vocal"===newValue2){
      this.typeCompagne='Compagne vocal';
      localStorage.setItem("routertypemessage","vocal");
    }
  }
templatenext="";
  smstype="simple";
  onItemChange(value){
    console.log("Value is : ", value );
    this.smstype=value;
    this.templatenext=value;
    localStorage.setItem("routertypemessage","sms");
    if(value==="smssimple"){this.type="SMS message Simple"}
    if(value==="smsvariable"){this.type="SMS message avec variable"}
  }
  Suivant(){
    console.log("date creat",this.datecreation);
    console.log('chek',this.datecreation.includes("Z"))
    this.compagnecsv.nom=this.nom;
    localStorage.setItem("nomcompagne",this.nom);
    //this.datecreationn=this.datecreation+":33.633Z"
    if(this.datecreation.includes("Z")){
      console.log("contient")
      this.compagnecsv.datecreation=String(this.datecreation);

    }
    else{
      console.log('ne contien pas')
      this.compagnecsv.datecreation=String(this.datecreation+":33.633Z");

    }
    this.compagnecsv.datecreation=String(this.datecreation+":33.633Z");
    localStorage.setItem("datecreationcompagne",this.datecreation);
    this.compagnecsv.type=this.type;
    localStorage.setItem('typecompagne',this.type);
    this.compagnecsv.messagesimple=String(this.messagsimple);
    this.compagnecsv.messagevariable=String(this.messagevariable);
    this.compagnecsv.messagepiece=String(this.messagepiece);
    this.compagnecsv.nomfilecsv=this.nomfilecsv;
    localStorage.setItem("nomfilcsvcompagne",this.nomfilecsv);
    this.compagnecsv.datafilecsv=this.datafilecsv;
    localStorage.setItem("datafilecsv",this.datafilecsv);
    this.compagnecsv.iduser=localStorage.getItem("iduser");
    console.log(this.compagnecsv);
    this.compagne.nom=this.nom;
    this.compagne.datecreation=this.datecreation+":06.118Z";
    this.compagne.type=this.type;
    this.compagne.typemessagewathssap=this.typemessagewathssap;
    this.compagne.messagesimple=String(this.messagsimple);
    this.compagne.messagevariable=String(this.messagevariable);
    this.compagne.messagepiece=String(this.messagepiece);
   this.servicecreecompagne.addcompagnecsv(this.compagnecsv);
  }
  Suivant2(){
   console.log('suivant 2');
   console.log("shedule date",this.dateshedule,"date initial",this.datecreation)
   console.log('type of compagn is ',this.typeCompagne);
    console.log("date creat",this.datecreation);
    console.log('chek',this.datecreation.includes("Z"))
    this.compagnecsv.nom=this.nom;
    localStorage.setItem("nomcompagne",this.nom);
    if(this.ttt==false){
      localStorage.setItem("datecreationcompagne",this.datecreation);
    }
    else{
      localStorage.setItem("datecreationcompagne",this.dateshedule);
    }
    localStorage.setItem('ttt',String(this.ttt));
    localStorage.setItem('typecompagne',this.typeCompagne);
   // this.router.navigate([this.typeCompagne]);
   console.log('data compagne de local store est ',localStorage.getItem('datecreationcompagne'))
   this.router.navigate(["upload file"]);
  }
  datafilecsv="";
  @HostListener('change',['$event.target'])
  onChange(target:HTMLInputElement){
    const file=target.files[0];
   this.nomfilecsv=target.files[0]["name"]
    console.log("hada filecsv",this.nomfilecsv);
    var reader =new FileReader();
   // console.log("ma3rfc");
    if (target.files && target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.datafilecsv = event.target.result;
         // console.log("probleme233333:", this.datafilecsv);
      }
      reader.readAsDataURL(target.files[0]);
  }
      }
      isSelected2($event){
        const chek=$event.target.checked;
        console.log("chek",chek);
        if(chek){
          this.kkk=1;
          this.ttt=true;
        }
        else{this.kkk=0;
          this.ttt=false;
        }
        console.log('id',$event.target.id)
      }
  isSelected($event){
    console.log("hada role 1");
          const chek=$event.target.checked;
          const id=$event.target.value;
          ///this.ms="oui";
          if(id==1){
            console.log("cheeek",chek)
            this.messagsimple=chek;
            console.log("messSimpl",this.messagsimple)
            this.type="message simple"
            localStorage.setItem("routertypemessage","message simple");

            //this.role.msgvariable=String(this.mv);
          }
          if(id==2){
            this.messagevariable=chek;
            console.log("mV",this.messagevariable),
            this.type="message avec variable"
            localStorage.setItem("routertypemessage","message avec variable");

          }
          if(id==3){
            this.messagepiece=chek;
            console.log("Piece joi",this.messagepiece)
            this.type="message avec piece"
            localStorage.setItem("routertypemessage","towbutton");
          }
         // console.log("chebox :",id,"is",chek);
        }
        touslesvariable=['nom','prenom','age','adress','number','gestion','numerodossier','email','null'];
        //array varibales to store csv data
        lines = []; //for headings
        linesR = []; // for rows
        //File upload function
      notrevariable = [];
      localUrl="";
      inputfilvalide="false";
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
                this.localUrl = String(reader.result);
                console.log("probleme :",this.localUrl);

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
                this.inputfilvalide="true";
                this.lines.push(tarr);
                console.log("notre variable passe ver publipostage ==",tarr);
                localStorage.setItem("notrtrVA",JSON.stringify(tarr));
                tarr.forEach(element => {
                  console.log("hahahha",element);
                });
                // Table Rows
                let tarrR = [];
                let arrl = allTextLines.length;
                console.log('nembreligneofdatatcompagne',allTextLines.length-1);
                localStorage.setItem("nembreligneofdatatcompagne",String(allTextLines.length-1));
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
          //for (let l = 0; l< this.lines[0].length; l++) {
            
            //console.log("hooo",l,this.lines[l])
       // }

              }
}
