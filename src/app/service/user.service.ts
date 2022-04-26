import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';
const httpOptions = { 
    headers: new HttpHeaders( {
      'Content-Type': 'application/json',
     }
     ) };
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string ='http://127.0.0.1:8000/api/users'; 
   constructor(private router :Router,private http : HttpClient) {    
      } 
//listeusers():User[] { 
//return this.users
//}
//private extractData(res: Response) {
  //let body = <User[]>res.json();
  //return body || {};
//}
listeusers(): Observable<User[]>{    
   return this.http.get<User[]>(this.apiURL);
    } 
  handleError(handleError: any): Observable<User[]> {
    throw new Error('Method not implemented.');
  }
   /* listeusers2(): Observable<User[]>{    
      return this.http.get(this.apiURL).pipe(map((data:any =>{
        let users2:any =new Array();
        return null;
      }))
      )
       }*/ 
//ajouterProduit( prod: User):Observable<User>{       
  //return this.http.post<User>(this.apiURL, prod, httpOptions);
    //} 
    ajouterclient( prod: User){ 
      console.log(prod);
      console.log("prod fiiinn");
      return this.http.post<User>(this.apiURL, prod, httpOptions).toPromise().then(data => {
        console.log("rsulta2");
        localStorage.setItem('iduserrole',String(data['id'])); 
        console.log(data);
      }); 
    }
    modifieruser(user :User,id){
      return this.http.put<User>(this.apiURL+"/"+id, user).toPromise().then(data => {
        console.log("resulta de modifier");
        console.log(data);
      }); 

    }


    supprimeruser( id: Number){ 
      //console.log(prod);
         console.log("prod",id);
        // apiURL2:String;
         this.apiURL=String(this.apiURL+"/"+String(id));
    console.log("url 2",this.apiURL);
         return this.http.delete(this.apiURL, httpOptions).toPromise().then(data => {
           console.log("rsulta24343");
          // localStorage.setItem('iduserrole',String(data['id'])); 
           console.log(data);
           this.router.navigate(["users"]);
         }); 
       }
    
//ajouterProduit( prod: User){ 
  //this.users.push(prod); 
//} 

}
