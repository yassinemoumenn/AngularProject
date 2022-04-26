import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Facture } from '../model/facture.model';
import { Facturesms } from '../model/facturesms.model';

const httpOptions = { 
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
providedIn: 'root'
})
export class FactureService {

  apiURL2: string;
  apiURL3: string = 'http://213.186.34.94/mybackend/public/index.php/api/facturesms';
  apiURL: string = 'http://213.186.34.94/mybackend/public/index.php/api/factures'; 
  //apiURL: string = 'http://213.186.34.94/my_project_name/public/index.php/api/factures'; 

   constructor(private http : HttpClient,private router:Router) {    
      } 
  listefacture(): Observable<Facture[]>{    
    return this.http.get<Facture[]>(this.apiURL);
     } 
     listefacturesms(): Observable<Facturesms[]>{    
      return this.http.get<Facturesms[]>(this.apiURL3);
       } 
ajouterfacture( prod: Facture){ 
      console.log(prod);
      console.log("prod");
      return this.http.post<Facture>(this.apiURL, prod, httpOptions).toPromise().then(data => {
        console.log("rsulta2");
        localStorage.setItem('iduserrole',String(data['id'])); 
        alert("on va tratter votre demmande");
        this.router.navigate(['facture']);
        console.log(data);
      }); 
    }
    ajouterfacturesms( prod: Facturesms){ 
      console.log(prod);
      console.log("prod");
      return this.http.post<Facturesms>(this.apiURL3, prod, httpOptions).toPromise().then(data => {
        console.log("rsulta2");
        localStorage.setItem('iduserrole',String(data['id'])); 
        alert("on va tratter votre demmande");
        this.router.navigate(['facturesms']);
        console.log(data);
      }); 
    }
}
