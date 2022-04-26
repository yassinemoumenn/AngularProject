import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-towbutton',
  templateUrl: './towbutton.component.html',
  styleUrls: ['./towbutton.component.css']
})
export class TowbuttonComponent implements OnInit {
  constructor(private rout:Router) { }
  ngOnInit(): void {
  }
  courrier(){
this.rout.navigate(["addcourrier"])
  }
compagne(){
  this.rout.navigate(["CreercompagnecourrierComponent"]);


}
}
