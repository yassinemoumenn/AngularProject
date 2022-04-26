import { Component } from '@angular/core';
import * as xlsx from 'xlsx';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl:'/app.component.html',
//<app-nav-hor></app-nav-hor>
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [ROUTER_DIRECTIVES, MenuNavComponent]
})
export class AppComponent {
  islog : String;
  urlimage="";
  eta : String="true";
  constructor(
    private authService: AuthService,
   ) {}
   useremail="";
  eta2: String='false';
  title = 'angular-auth'; 
 // private authService: AuthService;
  public    showMenu: boolean=true;
  ngOnInit(): void {
    this.useremail=localStorage.getItem("emailuser");

    this.islog=localStorage.getItem("isloggedIn");
    this.urlimage=localStorage.getItem("imageuser")
    console.log('app islog',this.islog);
    if(this.eta!=this.islog){
      //this.router.navigate(['login2']); 
         }
  }
  deconnexion(){
    console.log('deconn');
    this.authService.logout();
  }
}
