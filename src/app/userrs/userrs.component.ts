import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-userrs',
  templateUrl: './userrs.component.html',
  styleUrls: ['./userrs.component.css']
})
export class UserrsComponent implements OnInit {
  users : User[]; //un tableau de Produit 
  Client : User[];
  utilisateur : User[];
  typeuser='';
  usertest=new User();
  iduser="yuyu";
  closeResult = '';
  userforconnecter: Array<User> = [];

  //user2 : Ar
  constructor(private modalService: NgbModal,private userService: UserService ,private router: Router) { 
    //this.users = produitService.listeusers(); 
   } 
   ngOnInit(): void {   
  //  
    this.typeuser=localStorage.getItem('typeuser'); 
    this.iduser=localStorage.getItem('iduser'); 
    console.log("ttpl of noutre user",this.typeuser)
    this.userService.listeusers().subscribe(prods => {    
      console.log("prdfi33n")  ;  
      console.log(prods);      
           //this.user2 = prods[4];
           this.users = prods["hydra:member"];
           console.log('tables final user',this.users); 
            //this.listClient(); 
            this.getuserforconnect();
            console.log("hada dyal user connecter ",this.userforconnecter)
           // alert("goo");
           },
           err => {
             alert("problem d acce a l api");
           });    
         } 
         open(content) {
           console.log("hola");
          this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
        }
        private getDismissReason(reason: any): string {
          if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
          } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return `with: ${reason}`;
          }
        }
         modifier(id:Number){
          console.log('supprimer',id);
          var boss='boss';
          localStorage.setItem("useramodifier",String(id));
          localStorage.setItem('fromboss',boss);
          localStorage.setItem('modifierfrmboos',"true");
          this.router.navigate(['modifer']);
          //this.teml=1;
         // this.userService.supprimeruser(id);
          //alert("vous avez suprimer le courrier :"+id);
        }
         deleteuser(id:Number){
          console.log('supprimer',id);
          //this.teml=1;
          this.userService.supprimeruser(id);
          alert("vous avez suprimer le courrier :"+id);
          location.reload();
        }
         listClient(){
          console.log("liste des client");
          this.users.forEach(element => {
          var idk=element.id;
          console.log('id',idk);
          //this.usertest.email='';
          if(element.type=="client"){
            this.usertest=element
            console.log('client 1',this.usertest);
            this.Client.push(this.usertest);
            console.log('table',this.Client);
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

        getuserforconnect(){
          this.users.forEach(element => {
            if(element.idClient==this.iduser){
              console.log(element);
              this.userforconnecter.push(element);
            }
          });
        }
}
