import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../model/role.model';
import { User } from '../model/user.model';
import { EncrDecrService } from '../service/encr-decr.service';
import { RoleService } from '../service/role.service';
import { UserService } from '../service/user.service';
const httpOptions = { 
  headers: new HttpHeaders( {'Content-Type': 'application/ld+json'} ) };

@Component({
  selector: 'app-add-userr',
  templateUrl: './add-userr.component.html',
  styleUrls: ['./add-userr.component.css']
})
export class AddUserrComponent implements OnInit {
  newuser = new User(); 
  typeuser="";
  url="https://bootdey.com/img/Content/avatar/avatar7.png";
  url2="C:\Users\Anouar Gmili\Desktop\\test5.csv";
  profilimage="https://bootdey.com/img/Content/avatar/avatar7.png";
  constructor(private EncrDecr: EncrDecrService,private produitService: UserService, private roleservice: RoleService,private router: Router) { } 
  //addProduit(){ 
    // console.log(this.newProduit); 
   // this.produitService.ajouterProduit(this.newuser); 
 // }
 users2 : User[]; //un tableau de Produit 
  addProduit(){ 
    this.produitService.ajouterclient(this.newuser).then(prod => {      
      console.log(prod); 
    });   
     this.router.navigate(['users']);    
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
         this.profilimage=ev.target.result;  

         console.log("datatattatattat",this.url) ;
        }
          
        }
  
      }
    modifierimage(){
      console.log("modifier image");
/* this.imageadd.iduser= this.userid;
console.log("userid ",this.imageadd.iduser)
this.imageadd.imagebase=this.url;
  this.imageprofilaservice.addimge(this.imageadd); */
    }
    addutilisateur(b :boolean=false){ 
      console.log("addd user");
      this.newuser.type='utilisateur';
      this.newuser.idClient=localStorage.getItem("iduser");
      this.newuser.imageprofil=this.url;
      this.produitService.listeusers().subscribe(prods => {    
             this.users2 = prods["hydra:member"]; 
             },
             err => {
               alert("problem d acce a l api");
             });
            this.users2.forEach((curUser) => { 
              if(this.newuser.email=== curUser.email) { 
             this.router.navigate(['ajouteruser']);
            b=true;
              } 
            });  
            if(b==true)
            alert("ce email deja existe");
            else{
              console.log("onvas ajouter",this.newuser )
              this.produitService.ajouterclient(this.newuser).then(prod => {      
                console.log(prod); 
              });
              //this.ajouterrol();   
              this.router.navigate(['users']);  
            
            }
                   
       //alert("votre utilisateur bien ajouté");
      } 

      ajouterclient(b :boolean=false){ 
        console.log("addd user");
        this.newuser.idClient=localStorage.getItem("iduser");
        this.newuser.type="client";
        this.newuser.imageprofil=this.url;
        this.newuser.password = this.EncrDecr.set('123456$#@$^@1ERF', this.newuser.password);
        var decrypted = this.EncrDecr.get('123456$#@$^@1ERF', this.newuser.password);
        console.log('Encrypted :' + this.newuser.password);
        console.log('Encrypted :' + decrypted);
        console.log("new  ser cdjsjc",this.newuser);
        this.produitService.listeusers().subscribe(prods => {    
               this.users2 = prods["hydra:member"]; 
               },
               err => {
                 alert("problem d acce a l api");
               });
              this.users2.forEach((curUser) => { 
                if(this.newuser.email=== curUser.email) { 
               this.router.navigate(['ajouteruser']);
              b=true;
                } 
              });  
              if(b==true)
              alert("ce email deja existe");
              else{
                this.produitService.ajouterclient(this.newuser).then(prod => {      
                  console.log(prod); 
                });
                //this.ajouterrol();   
                this.router.navigate(['users']);  
              }        
         //alert("votre utilisateur bien ajouté");
        } 
m=false;
mv=false;
mp=false;
role=new Role();
userid: Number;
isSelected($event){
  console.log("hada role 1");
 console.log(this.role);

        const chek=$event.target.checked;
        const id=$event.target.value;
        ///this.ms="oui";
        if(id==0){
          this.m=chek;
          this.role.msgsimple=String(this.m)
        }
        if(id==1){
          this.mv=chek;
          this.role.msgvariable=String(this.mv);
        }
        if(id==2){
          this.mp=chek;
          this.role.msgpiece=String(this.mp);
        }
       // console.log("chebox :",id,"is",chek);
       console.log("hada role 2");
        console.log(this.role);
       console.log(this.mv);
       console.log(this.mp);
       console.log("((((((this.mp))))))");
      }
    ajouterrol(){
      
      this.userid=Number(localStorage.getItem('iduserrole'));
      this.role.iduser=Number(this.userid);
      console.log(this.role);
      this.roleservice.ajouter(this.role).then(prod => {      
        console.log("id kanqolbo 3lih");
        console.log(prod["id"]); 
      }); 
    }
  ngOnInit(): void {
    this.typeuser=localStorage.getItem('typeuser');

      this.produitService.listeusers().subscribe(prods => {    
             this.users2 = prods["hydra:member"]; 
             },
             err => {
              // alert("problem d acce a l api");
             });
  }

}
