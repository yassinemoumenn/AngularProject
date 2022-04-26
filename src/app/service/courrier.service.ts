import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courrier } from '../model/courrier.model';
import { User } from '../model/user.model';
const httpOptions = { 
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
providedIn: 'root'
})
export class CourrierService {

  apiURL: string = 'https://127.0.0.1:8000/api/courriers'; 
  
   constructor(private http : HttpClient) {    
      } 
  listcourrier(): Observable<Courrier[]>{    
    return this.http.get<Courrier[]>(this.apiURL);
     } 
     ajoutercourier( prod: Courrier){ 
      console.log(prod);
      console.log("prod");
      return this.http.post<Courrier>(this.apiURL, prod, httpOptions).toPromise().then(data => {
        console.log("rsulta2");
        localStorage.setItem('iduserrole',String(data['id'])); 
        console.log(data);
      }); 
    }
}
