import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../model/role.model';
import { User } from '../model/user.model';
import { RoleService } from '../service/role.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newuser = new User(); 
  typeuser="";
  constructor(private produitService: UserService, private roleservice: RoleService,private router: Router) { } 
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
    addutilisateur(b :boolean=false){ 
      this.produitService.listeusers().subscribe(prods => {    
        this.newuser.type="utilisateur";    
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
              this.ajouterrol();   
              this.router.navigate(['users']);  
            
            }
                   
       //alert("votre utilisateur bien ajouté");
      } 

      addclient(b :boolean=false){ 
        this.produitService.listeusers().subscribe(prods => {    
               this.newuser.type="client";
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
                this.ajouterrol();   
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
