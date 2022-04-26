import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';
import { EncrDecrService } from '../service/encr-decr.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-mod-pwd',
  templateUrl: './mod-pwd.component.html',
  styleUrls: ['./mod-pwd.component.css']
})
export class ModPwdComponent implements OnInit {

  constructor(private EncrDecr: EncrDecrService,private http: HttpClient,private authService: AuthService,
    
  private userService: UserService, private router: Router) { }
  newpass= new User();
  oldpass = new User();
  userid : String;
  oldvraispassword :String;

  islog : String;
  eta : String="true";
  ngOnInit(): void {
    this.islog=localStorage.getItem("isloggedIn");
    if(this.eta!=this.islog){
      this.router.navigate(['login2']);      }
  }
  modifierpassword(){
    this.oldvraispassword=localStorage.getItem("passworduser");
    console.log("paswword crypt",this.oldvraispassword);
    this.oldpass.password = this.EncrDecr.set('123456$#@$^@1ERF', this.oldpass.password);
    console.log("old paswor crypty",this.oldpass.password)
    this.newpass.password=this.EncrDecr.set('123456$#@$^@1ERF',this.newpass.password);
    console.log("neww passwor crypti",this.newpass.password);
    this.userid=localStorage.getItem('iduser');
    if(this.oldvraispassword!=this.oldpass.password){
      alert("Votre ancien mot de passe est incorrect");
      this.router.navigate(['modifierpassword']);  
      return 0;
    }
    else {
      alert('Attend un peu');
      console.log('modifier de password start');
      console.log(this.newpass.password);
      //this.newpass.password=this.EncrDecr.set('123456$#@$^@1ERF',this.newpass.password);
      this.userService.modifieruser(this.newpass, this.userid).then(prod => { 
        console.log('modifier eta2');
        console.log(prod); 
        console.log(this.newpass);
        alert('Votre mise à jour a bien effectué retour ver votre profil');
        localStorage.setItem('passworduser',String(this.newpass.password)); 
        this.router.navigate(['home']);    
      });  
    }
     
     
     //alert("votre utilisateur bien ajouté");
  }

}
