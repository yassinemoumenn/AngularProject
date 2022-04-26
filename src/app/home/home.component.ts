import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Emitters} from '../emitters/emitters';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { EncrDecrService } from '../service/encr-decr.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = '';

  constructor(private EncrDecr: EncrDecrService,
    private http: HttpClient,private authService: AuthService, private router: Router
  ) {
  }

  router2: Router;
  userad : String;
  userid : String;
  userville : String;
  usercin : String;
  usernom : String;
  userprenom : String;
  useradress: String;
  useremail : String;
  userad2 : String;
  usernumber : String;
  islog : String;
  eta : String="true";
 typeusr="";
 urlimage="";
ec="";
dec="";


  ngOnInit(): void {
    //alert('okk');
 
   /* this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.name}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = "bonjour Admin ";
        Emitters.authEmitter.emit(false);
      }
    );*/
  this.typeusr=localStorage.getItem('typeuser');
    this.userad2=localStorage.getItem('loggedUser');
    this.userad=this.authService.loggedUser;
    this.useradress=localStorage.getItem('adressuser');
    this.userville=localStorage.getItem('villeuser');
    this.usercin=localStorage.getItem('cinuser');
    this.userid=localStorage.getItem('iduser');
    this.useremail=localStorage.getItem('emailuser');
    this.usernom=localStorage.getItem('nomuser');
    this.userprenom=localStorage.getItem('prenomuser');
    this.usernumber=localStorage.getItem('numberuser'); 
    this.islog=localStorage.getItem("isloggedIn");
    this.urlimage=localStorage.getItem("imageuser");
    console.log(this.islog);
    console.log('okkk');
    var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', 'password@123456');
    var decrypted = this.EncrDecr.get('123456$#@$^@1ERF', encrypted);
    console.log('Encrypted :' + encrypted);
    console.log('Encrypted :' + decrypted);
    this.ec=encrypted;
    this.dec=decrypted;
    if(this.eta!=this.islog){
      this.router.navigate(['login2']); 
         }

  }

}
