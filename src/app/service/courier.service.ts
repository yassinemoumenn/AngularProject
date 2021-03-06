import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courier } from '../model/courier.model';
import { Courrier } from '../model/courrier.model';
import { User } from '../model/user.model';
const httpOptions = { 
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
providedIn: 'root'
})
export class CourierService {
  apiURL2: string;
  apiURL: string = 'http://127.0.0.1:8000/api/courriers'; 
   constructor(private http : HttpClient) {    
      } 
  listcourrier(): Observable<Courier[]>{    
    return this.http.get<Courier[]>(this.apiURL);
     } 
     ajoutercourier( prod: Courrier){ 
      console.log(prod);
      console.log("prod");
      return this.http.post<Courier>(this.apiURL, prod, httpOptions).toPromise().then(data => {
        console.log("rsulta2");
        localStorage.setItem('iduserrole',String(data['id'])); 
        console.log(data);
      }); 
    }

    supprimercourrier( id: Number){ 
   //console.log(prod);
      console.log("prod",id);
     // apiURL2:String;
      this.apiURL2=String(this.apiURL+"/"+String(id));
 console.log("url 2",this.apiURL2);
      return this.http.delete(this.apiURL2, httpOptions).toPromise().then(data => {
        console.log("rsulta2");
        localStorage.setItem('iduserrole',String(data['id'])); 
        console.log(data);
      }); 
    }
}
