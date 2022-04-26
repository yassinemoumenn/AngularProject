import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imageprofil } from '../model/imageprofil.model';
import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';
import { ImageprofilService } from '../service/imageprofil.service';
import { UserService } from '../service/user.service';
const httpOptions = { 
  headers: new HttpHeaders( {'Content-Type': 'application/ld+json'} ) };
@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent implements OnInit {
  constructor( private http: HttpClient,private authService: AuthService,
  private userService: UserService, private router: Router,
  private imageprofilaservice :ImageprofilService) { }
  newdata = new User();
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
  varrrr="hahahha";
  varboss="false";
  eta : String="true";
  url="https://bootdey.com/img/Content/avatar/avatar7.png";
  url2="C:\Users\Anouar Gmili\Desktop\\test5.csv";
bosss='';
  ngOnInit(): void {
    this.bosss=localStorage.getItem("fromboss")
    this.userad2=localStorage.getItem('loggedUser');
    this.userad=this.authService.loggedUser;
    this.useradress=localStorage.getItem('adressuser');
    this.userville=localStorage.getItem('villeuser');
    this.usercin=localStorage.getItem('cinuser');
    this.userid=localStorage.getItem('iduser');
    this.useremail=localStorage.getItem('emailuser');
    this.usernom=localStorage.getItem('nomuser');
    this.newdata.nom=localStorage.getItem('nomuser');
    this.userprenom=localStorage.getItem('prenomuser');
    this.usernumber=localStorage.getItem('numberuser'); 
    this.islog=localStorage.getItem("isloggedIn");
    this.url=localStorage.getItem("imageuser");
    console.log(this.islog);
    this.newdata.prenom=localStorage.getItem('prenomuser');
    this.newdata.email=localStorage.getItem('emailuser');
    this.newdata.number=localStorage.getItem('numberuser');
    this.newdata.ville=localStorage.getItem('villeuser');
    this.newdata.adress=localStorage.getItem('adressuser');
    this.varboss=localStorage.getItem("modifierfrmboos");
    if(localStorage.getItem("modifierfrmboos")=="true"){
      this.newdata.prenom="";this.newdata.nom="";this.newdata.adress="";
      this.newdata.email="";this.newdata.ville="";this.newdata.number="";
      localStorage.setItem("modifierfrmboos","false");
    }
    console.log(this.newdata.prenom);
    if(this.eta!=this.islog){
      this.router.navigate(['login2']);      }

  }
  modofierprofil(){
    console.log('modifier start');
    alert('encours de modification');
    console.log(this.newdata);
    this.newdata.imageprofil=this.url;
    if( this.bosss=="boss"){
      this.userid=localStorage.getItem('useramodifier');
      localStorage.setItem('fromboss',"");
      this.userService.modifieruser(this.newdata, this.userid).then(prod => { 
        console.log('modifier eta2');
        console.log(prod); 
        console.log(this.newdata);});
        this.router.navigate(['users']);    
    }
    //console.log('user a modifier est ',this.userid);
    else{
    this.userService.modifieruser(this.newdata, this.userid).then(prod => { 
      console.log('modifier eta2');
      console.log(prod); 
      console.log(this.newdata);
      alert('Votre mise à jour a bien effectué retourne ver votre profil');
     //localStorage.setItem('isloggedIn',String(this.newdata)); 
      localStorage.setItem('adressuser',String(this.newdata.adress));
      localStorage.setItem('villeuser',String(this.newdata.ville));
      localStorage.setItem('imageuser',String(this.newdata.imageprofil));
      //localStorage.setItem('cinuser',String(this.newdata.cin));
    //localStorage.setItem('iduser',String(this.newdata.id));
      localStorage.setItem('emailuser',String(this.newdata.email));
      localStorage.setItem('nomuser',String(this.newdata.nom));
      //localStorage.setItem('prenomuser',String(this.newdata.prenom));
      localStorage.setItem('numberuser',String(this.newdata.number)); 
      this.router.navigate(['home']);    
    });   
  }
     //alert("votre utilisateur bien ajouté");
  }
  selectprofil($event){
    console.log("hh");
    if($event.target.files){
    console.log('path',$event.target.value);
    var url4=$event.target.files[0];
     var url3=$event.target.value;
    url3=url3.replace("\\","/");
    console.log("url2",url3);
    console.log("url4",url4);
     var url9="C:/fakepath/csv.PNG";
    var i;
   // for(i=0,i<=url3.le)
      var reader =new FileReader();
      reader.readAsDataURL($event.target.files[0]);
     // console.log( reader.readAsDataURL($event.target.files[0]));
      reader.onload=(ev:any)=>{
       this.url=ev.target.result;
         const httpOptions2 = {
          headers: new HttpHeaders(
          { 
            'Authorization': 'Your Token',
            'Content-Type': 'application/ld+json'
          })
      }
        var formData: any = new FormData();
        formData.set("path",url3);
        formData.set("contac","contact78999.vcf");
        console.log("hada url",this.url);
        console.log("fin url");
        console.log(formData);
        //this.http.post('https://127.0.0.1:8000/api/books',httpOptions).subscribe();;
     /*   this.http.post<any>("https://127.0.0.1:8000/api/vcard",
        formData).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );*/
      }
       
      //  formData.append("avatar", this.form.get('avatar').value);
      
      }

    }
    imageadd= new Imageprofil();
    modifierimage(){
      console.log("modifier image");
this.imageadd.iduser= this.userid;
console.log("userid ",this.imageadd.iduser)
this.imageadd.imagebase=this.url;
  this.imageprofilaservice.addimge(this.imageadd);
    }
  }




