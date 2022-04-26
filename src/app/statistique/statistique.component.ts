import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { Compagnecsv } from '../model/compagnecsv.model';
import { CompagneService } from '../service/compagne.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  constructor(private campagneservice:CompagneService,private router:Router) { }
  campagnes:Compagnecsv[];
date1:Date;
data1="100";
date4=formatDate(new Date(), 'yyyy-MM-dd', 'en');s
date3=new Date();
islog : String;
eta : String="true";
numbercompagne=0;
ngOnInit(): void {
  this.islog=localStorage.getItem("isloggedIn");
  console.log("etat is ",this.eta,"is log",this.islog)
  if(this.eta!=this.islog){
    this.router.navigate(['login2']); 
    //console.log("tu")
       }
  //let date5= 
//console.log("date5",date5)
  this.campagneservice.getcollectiocompagnecsv().subscribe(prods => {    
    console.log("prdfi33n")  ;  
    console.log(prods);      
         this.campagnes = prods["hydra:member"];
         console.log('tables final user',this.campagnes);
         this.numbercompagne=this.campagnes.length;
         console.log("number of camp",this.numbercompagne)
         this.campagnes.forEach(element => {
          console.log(element.datecreation.substring(0,10));

         /// this.statistique(element.datecreation.substring(0,10));
         });
       var myDate= formatDate(new Date(), 'yyyy/MM/dd', 'en');
        //var myDate = new DatePipe();
        console.log("my current date",myDate);
       
    //console.log("deuxiem table ",this.factures2);
  });
}
onChange(value){
console.log("dateee hhh",value);
console.log('date ang',formatDate(this.date1, 'yyyy/MM/dd', 'en'))
let vanr="2020-11-01";
this.calculenumberperiod(this.date4,formatDate(this.date1, 'yyyy-MM-dd', 'en'));
//if(this.date1.getTime<vanr.getTime)
//this.date1=formatDate(this.date1, 'yyyy/MM/dd', 'en');
}
on2Change(value){
  console.log('date ang',formatDate(this.date4, 'yyyy/MM/dd', 'en'))

}



calculenumberperiod(date2:String,date1:String){
let count=0;
this.campagnes.forEach(element => {
  let newDate = new Date(String(element.datecreation).substr(0,10)) 
  let dateeleme=formatDate(newDate, 'yyyy-MM-dd', 'en')
  if((date2>dateeleme && date1<dateeleme) || date1===dateeleme || dateeleme===date2){
    count=count+1;
    //console.log("date1",date1,"est sup a date 2",date2)
  }
});
this.numbercompagne=count;
 /* let count=0;
this.campagnes.forEach(element => {
//console.log("element string date:",element.datecreation.substr(0,10));
let newDate = new Date(String(element.datecreation).substr(0,10)) 
//console.log("dateee is ;",formatDate(newDate, 'yyyy/MM/dd', 'en'))
let va2=formatDate(newDate, 'yyyy/MM/dd', 'en');
let vavv=formatDate(this.date1, 'yyyy/MM/dd', 'en');
if(vavv>va2){
  count=count+1;
console.log(vavv ,'est supp a ',va2)
}
else{
  count=count+1;

  console.log(vavv ,'est inf a ',va2)

}
});
console.log("count final est ",count)
*/
}


}
