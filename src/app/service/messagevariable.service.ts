import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Messagevariables } from '../model/messagevariable.model';
import { Messageenvoyer } from '../model/messageenvoyer.model';
const httpOptions = { 
    headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
  providedIn: 'root'
})
export class MessagevariableService {
  apiURL: string = 'https://127.0.0.1:8000/api/messagevs'; 
  apiUrl22: String ='https://api.chat-api.com/instance333159/sendMessage?token=4lp8ckv17hqfwfv3';
  apiURLwathsap: string='https://api.chat-api.com/instance328314/sendMessage?token=acj27tp7cwynpi4h';
  apiURLwathsap2: string='https://api.chat-api.com/instance333159/sendMessage?token=4lp8ckv17hqfwfv3';
  constructor(private http : HttpClient) { }
 ajoutermessagevariable(message : Messagevariables){
  console.log(message);
  console.log("notre message haut entre function");
  return this.http.post<Messagevariables>(this.apiURL,
     message, httpOptions).toPromise().then(data => {
    console.log("rsulta2 of messsage variable");
    console.log(data);
  }); 
 }
 envoyerm(m : Messageenvoyer){
  console.log(m);
  return this.http.post<Messageenvoyer>(this.apiURLwathsap,
    m, httpOptions).toPromise().then(data => {
   console.log("rsulta2 of messsage variable");
   console.log(data);
 }); 

 }
 envoyermessagewathsap(m : Messageenvoyer){
  console.log(m);
  return this.http.post<Messageenvoyer>(this.apiURLwathsap2,
    m, httpOptions).toPromise().then(data => {
   console.log("rsulta2 of messsage variable");
   console.log(data);
 }); 

 }
}
