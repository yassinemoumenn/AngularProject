import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../model/role.model';
const httpOptions = { 
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  apiURL: string = 'https://127.0.0.1:8000/api/roles'; 
  constructor(private http : HttpClient) {    
     } 

     ajouter( prod: Role){ 
      console.log(prod);
      console.log("prod");
      return this.http.post<Role>(this.apiURL, prod, httpOptions).toPromise().then(data => {
        console.log("rsulta2");
        console.log("id kanqolbo 3lih");
        console.log(data["id"]); 
        console.log(data);
      }); 
    }
}
