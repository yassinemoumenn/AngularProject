import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourierService } from '../service/courier.service';
import { CourrierService } from '../service/courrier.service';

@Component({
  selector: 'app-chargerclientcsv',
  templateUrl: './chargerclientcsv.component.html',
  styleUrls: ['./chargerclientcsv.component.css']
})
export class ChargerclientcsvComponent implements OnInit {
  data: [][];
  conteur=0;
  urlfin="";
  localUrl="";
  statuzs :Number;
  nomcsv="";
  nomfilvcard="";
  messageenv : String;
  apiURL: string = 'https://127.0.0.1:8000/api/messagevs'; 
  
  constructor(private courierservice2: CourierService,
    private courierservice: CourrierService,private http : HttpClient
    ,private router: Router) { }

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
      }

      chargerclientcsv(){
        var formData: any = new FormData();
    formData.set("path",this.urlfin);
    formData.set("nomfilecsv",this.localUrl);
    formData.set("filevcard", this.nomfilvcard);
    formData.set("idClientactive",
    String(localStorage.getItem('iduser'))
    );
    console.log(localStorage.getItem('iduser')
    )
    console.log("logo 222",this.localUrl);
    console.log("2");
    console.log("fin url nuopload commen");
    console.log(formData);
    alert("cette tache vas prendre quelque seconde");
    this.http.post<any>("https://127.0.0.1:8000/api/ClientC",
    formData).subscribe(
      (response) => console.log(response["HttpErrorResponse"]["status"]),
      (error) =>{ 
      console.error(error);
      this.statuzs=error["status"];
      if (this.statuzs==200) {
        alert("bien importer");
        this.router.navigate(["home"]);
      }


    }
      
    );

      }

}
