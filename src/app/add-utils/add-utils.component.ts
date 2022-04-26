import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Util } from '../model/util.model';
import { UtilService } from '../service/util.service';

@Component({
  selector: 'app-add-utils',
  templateUrl: './add-utils.component.html',
  styleUrls: ['./add-utils.component.css']
})
export class AddUtilsComponent implements OnInit {
  [x: string]: any;
    newutil=new Util();
  constructor(private utilService: UtilService, private router: Router) { }

  addUtilt(){   
      console.log("prod0"); 
      this.utilService.ajouterUtil(this.newutil).then(prod => {      
       console.log(prod);  
       console.log("prod2");          
      });     
       this.router.navigate(['utilisateur']);
    }  
  ngOnInit(): void {
  }

}
