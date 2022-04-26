import { Injectable } from '@angular/core';

import { Util } from '../model/Util.model'; 
import { Observable } from 'rxjs';
///import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { catchError } from 'rxjs/operators';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

 const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/ld+json'} ) 
}; 
@Injectable({ 
  providedIn: 'root' 
}) 
@Injectable({
  providedIn: 'root'
})
export class UtilService {
  utils :Util[]; 
  apiURL: string = 'https://127.0.0.1:8000/api/utils'
  //contantn ck=0;
  
constructor(private http : HttpClient) {        } 

listeUtil(): Observable<Util[]>{     
  return this.http.get<Util[]>(this.apiURL);  
 }


  /*constructor() { 
    this.utils=[  
       {idUtil : 1, 
       nomUtil : "PC Asus", passwordUtil : "3000",
        dateCreation : new Date("01/14/2011")},  
         {idUtil : 2,  nomUtil: "Imprimante Epson", passwordUtil : "450", dateCreation : new Date("12/17/2010")}, 
           {idUtil: 3,  nomUtil :"Tablette Samsung", passwordUtil : "900", dateCreation : new Date("02/20/2020")}       
            ]; 
  }*/
  //listeUtils():Util[] {       
    // return this.utils; 
  //} 
  //listeUtils():Util[] {       
  //  return this.utils; } 

  ajouterUtil( prod: Util){ 
    console.log(prod);
    console.log("prod");
    return this.http.post<Util>(this.apiURL, prod, httpOptions).toPromise().then(data => {
      console.log("rsulta");
      console.log(data);
    }); 
  }
  
  supprimerutil( prod: Util){      //supprimer le produit prod du tableau produits        
    const index = this.utils.indexOf(prod, 0);   
        if (index > -1) {         
      this.utils.splice(index, 1);      
     }      
       //ou Bien       
      /*  this.produits.forEach((cur, index) => {          
        if(prod.idProduit === cur.idProduit) {    
                this.produits.splice(index, 1);              
               }      
               });*/
              }
}
