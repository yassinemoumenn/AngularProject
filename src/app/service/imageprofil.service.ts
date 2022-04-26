import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imageprofil } from '../model/imageprofil.model';

const httpOptions = { 
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };

@Injectable({
  providedIn: 'root'
})
export class ImageprofilService {
  apiURL: string = 'https://127.0.0.1:8001/api/imageprofils'; 
  //apiURL: string = 'http://213.186.34.94/my_project_name/public/index.php/api/imageprofils'; 

  constructor(private http : HttpClient) { }
addimge(image : Imageprofil){
return   this.http.post<Imageprofil>(this.apiURL, image, httpOptions).toPromise().then(data => {
  console.log("rsulta2");
  localStorage.setItem('iduserrole',String(data['id'])); 
  console.log(data);
}); 

}

}
