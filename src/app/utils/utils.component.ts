import { Component, NgModule, OnInit } from '@angular/core';
import { Util } from '../model/util.model';
import { UtilService } from '../service/util.service';
import { User } from '../model/user.model'; 
@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.css']
})

export class UtilsComponent implements OnInit {
utils :Util[]=new Array(); 
users :User[];
errorMessage:string;
  constructor(private utilService: UtilService ) { 
 /*   this.users = [{id : 3,    
      nom : "string",
      prenom: "string",    
      email:"String",
      adress:"String",
      password : "String",   
      number:"8",
      cin:,
      ville:"String",
      }];   */
 // this.utils=utilService.listeUtils();
 
  }
  supprimerUtil(p: Util)    {      
    //this.utilService.supprimerutil(p);  
    let conf = confirm("Etes-vous sûr ?"); 12.      
     if (conf) 13.      
         this.utilService.supprimerutil(p); 
    
      }
 


  
  ngOnInit(): void {    
     this.utilService.listeUtil().subscribe(
                            data => {
                              this.utils = data;
                              console.log(this.utils);
                             // this.utils = Array.of(data); 
                              console.log('ho');
                            }, error => this.errorMessage = <any> error); 

                            
                            } 

}
