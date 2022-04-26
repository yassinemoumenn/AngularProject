import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Util } from '../model/util.model';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
//import { GlobalEventsManager } from 'src/main';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  utils : Util[]= [{id:1,nom:"admin",password:"123",date :new Date("01/14/2011")}
  ,{id:2,nom:"admin2",password:"123",date :new Date("01/14/2011")} ]; 
  apiURL2: string = 'http://213.186.34.94/mybackend/public/index.php/api/users'; 
  usersadmin : User[];
  public useractive :User;
  nondod=0;
  public loggedUser:string; 
  public id : number;
  public isloggedIn: Boolean = false; 
  public roles:number[];
  constructor(private router: Router,private http : HttpClient,private userService : UserService) { } 
  logout() {  
    this.isloggedIn= false; 
    this.loggedUser = undefined; 
    this.roles = undefined; 
    localStorage.removeItem('loggedUser'); 
    localStorage.removeItem('adressuser'); 
    localStorage.removeItem('villeuser'); 
    localStorage.removeItem('cinuser'); 
    localStorage.removeItem('iduser'); 
    localStorage.removeItem('nomuser'); 
    localStorage.removeItem('prenomuser'); 
    localStorage.removeItem('numberedUser'); 
    localStorage.removeItem('emailuser'); 
    localStorage.removeItem('emailuser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login2']); 
  } 
    SignIn(util :Util):Boolean{ 
      let validUser: Boolean = false; 
      this.userService.listeusers().subscribe(prods => {    
        console.log("les uses")  ;  
        console.log(prods);      
             //this.user2 = prods[4];
             this.usersadmin = prods["hydra:member"]; 
             console.log(this.usersadmin); 
            // alert("goo");
            this.usersadmin.forEach((curUser) => { 
              console.log("rak dakhl test daba2");
              if(util.nom=== curUser.email && util.password==curUser.password) { 
                console.log(util.nom,"==",curUser.email)
                console.log('lqiti l user dyalk');
                validUser = true; 
                this.loggedUser = curUser.nom; 
                this.isloggedIn = true; 
                this.useractive=curUser;
                this.id=this.useractive.id;
                localStorage.setItem('loggedUser',this.loggedUser); 
                localStorage.setItem('isloggedIn',String(this.isloggedIn)); 
                localStorage.setItem('adressuser',String(this.useractive.adress));
                localStorage.setItem('villeuser',String(this.useractive.ville));
                localStorage.setItem('cinuser',String(this.useractive.cin));
                localStorage.setItem('iduser',String(this.useractive.id));
                localStorage.setItem('emailuser',String(this.useractive.email));
                localStorage.setItem('nomuser',String(this.useractive.nom));
                localStorage.setItem('prenomuser',String(this.useractive.prenom));
                localStorage.setItem('numberuser',String(this.useractive.number)); 
                localStorage.setItem('passworduser',String(this.useractive.password)); 
                alert('bienvenu');
                this.router.navigate(['home']);  
                //this.router.navigate(['home']); 
                return validUser;
              } 
            }); 
             },
             err => {
               alert("problem d acce a l api");
             });         
       return validUser; 
    } 
   
  /*isAdmin():Boolean{ 
      if (!this.roles) //this.roles== undefiened 
         return false; 
      return  (this.roles.indexOf('ADMIN') >-1) ; 
    } */
   
   
}
