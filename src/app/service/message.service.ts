import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Messsage } from '../model/messsage.mode';

const httpOptions = { 
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
providedIn: 'root'
})
export class MessageService {
  apiURL: string = 'http://213.186.34.94/mybackend/public/index.php/api/messages'; 
  constructor(private router:Router,private http : HttpClient) { }
  ajoutermessage( prod: Messsage){ 
    console.log(prod);
    console.log("prod");
    return this.http.post<Messsage>(this.apiURL, prod, httpOptions).toPromise().then(data => {
      console.log("rsulta2");
      console.log(data);
      alert('bien messsage');
    }); 
  }
}
