import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {

  constructor(private rout:Router) { }
unite='';
  ngOnInit(): void {
    this.unite=localStorage.getItem("unite");
    this.buttonavtive="false";
    console.log("hha",localStorage.getItem('routeprecedent'));
    if(localStorage.getItem('routeprecedentsms')=="true"){
      this.table='true'
      this.nombreligne=localStorage.getItem("nombreligne");
      this.taillefile=localStorage.getItem("taillefile");
      this.nomfile= localStorage.getItem('nomfile');
      this.typefile=localStorage.getItem("typefile");
    }

  }
  precedent(){
    this.rout.navigate(["crcomapgne"]);
    localStorage.setItem('routeprecedent','true');
    this.buttonavtive="false";
    localStorage.setItem('uplpoadprecedent','true');

  }
  datafile="";
  suivant(){
    localStorage.setItem('nomfile',this.nomfile);
    localStorage.setItem("nombreligne",this.nombreligne);
    localStorage.setItem("datafile",this.datafile);
    var total=Number(this.unite)*Number(this.nombreligne);
    localStorage.setItem('facturetotalcompagne',String(total));
    console.log("rout ver ",localStorage.getItem('typecompagne'));
    this.rout.navigate([localStorage.getItem('typecompagne')]);
    //this.rout.navigate(["resume"]);
  }
nomfile="";
taillefile="";
nombreligne="";
typefile="";
table="false";
  lines = []; //for headings
  linesR = []; // for rows
  //File upload function
notrevariable = [];
localUrl="";
inputfilvalide="false";
buttonavtive="false"
  changeListener(files: FileList){
    console.log(files);
this.buttonavtive="true";
    if(files && files.length > 0) {
       let file : File = files.item(0); 
         console.log(file.name);
         this.nomfile=file.name;
         console.log(file.size);
       this.taillefile=String(file.size);
       localStorage.setItem('taillefile',this.taillefile);
         this.table="true";
         console.log(file.type);
         this.typefile=file.type;
         localStorage.setItem("typefile",this.typefile);
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
          this.nombreligne=String(allTextLines.length-1);
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


        }
        @HostListener('change',['$event.target'])
        onChange(target:HTMLInputElement){
          const file=target.files[0];
         //this.nomfilecsv=target.files[0]["name"]
          //console.log("hada filecsv",this.nomfilecsv);
          var reader =new FileReader();
         // console.log("ma3rfc");
          if (target.files && target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.datafile = event.target.result;
               // console.log("probleme233333:", this.datafilecsv);
            }
            reader.readAsDataURL(target.files[0]);
        }
            }
}

