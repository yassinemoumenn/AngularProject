import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verefication',
  templateUrl: './verefication.component.html',
  styleUrls: ['./verefication.component.css']
})
export class VereficationComponent implements OnInit {
  conteur=0;
  urlfin="";
  localUrl="";
  statuzs :Number;
  nomcsv="";
  nomfilvcard="";
  messageenv : String;
  apiURL: string = 'https://127.0.0.1:8000/api/messagevs'; 
  constructor(private http : HttpClient
    ,private router: Router) { }

  ngOnInit(): void {
  }
  @HostListener('change',['$event.target'])
  onChange(target:HTMLInputElement){
    const file=target.files[0];
    this.nomcsv=target.files[0]["name"]
    //this.nomcsv=this.nomcsv.replace(".csv",".");
    this.nomfilvcard=target.files[0]["name"];
    this.urlfin=target.value;
   this.nomfilvcard=this.nomfilvcard.replace(".","_");
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
      verfiernumber(){
    var formData: any = new FormData();
    formData.set("path",this.urlfin);
    formData.set("nomfilecsv",this.localUrl);
    formData.set("filecsv",this.nomcsv);
    formData.set("filevcard", this.nomfilvcard);
    console.log("fin url uopload commen");
    console.log(formData);
   // window.scrollTo(0, 0);
     alert("Entrain de vérification");
    this.http.post<any>("https://127.0.0.1:8000/api/verfication",
    formData).subscribe(
      (response) => console.log(response["HttpErrorResponse"]["status"]),
      (error) =>{ 
      console.error(error);
      this.statuzs=error["status"];
      if (this.statuzs==200) {
        alert("Le fichier est bien vérifié");
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
