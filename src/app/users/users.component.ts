import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : User[]; //un tableau de Produit 
  Client : User[];
  utilisateur : User[];
  typeuser='';
  //user2 : Ar
  constructor(private userService: UserService ) { 
    //this.users = produitService.listeusers(); 
   } 
 
   ngOnInit(): void {    
     //this.listClient();
     //this.listuser();
     this.typeuser=localStorage.getItem('typeuser'); 
     console.log("ttpl of noutre user",this.typeuser)
     this.userService.listeusers().subscribe(prods => {    
      console.log("prdfi333333")  ;  
      console.log(prods);      
           //this.user2 = prods[4];
           this.users = prods["hydra:member"]; 
           console.log(this.users); 
          // alert("goo");
           },
           err => {
             alert("problem d acce a l api");
           });    
         }
         
    listClient(){
      this.users.forEach(element => {
      if(element.type=="client"){
        console.log(element);
        this.Client.push(element);
      }
      
      
    });
    }

             
    listuser(){
      this.users.forEach(element => {
      if(element.type=="utilisateur"){
        console.log(element);
        this.utilisateur.push(element);
      }
    });
    }

}
