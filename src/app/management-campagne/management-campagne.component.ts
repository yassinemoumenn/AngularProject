
import { Component, OnInit } from '@angular/core';
import { Compagnecsv } from '../model/compagnecsv.model';
import { CompagneService } from '../service/compagne.service';
import { CalendarOptions, EventAddArg } from '@fullcalendar/angular'; // useful for typechecking
import { DatePipe } from '@angular/common';
//import { eventNames, title } from 'process';
import {formatDate} from '@angular/common';
import { initialEnd } from '@syncfusion/ej2-richtexteditor';

@Component({
  selector: 'app-management-campagne',
  templateUrl: './management-campagne.component.html',
  styleUrls: ['./management-campagne.component.css']
})
export class ManagementCampagneComponent implements OnInit {

  constructor(private campagneservice:CompagneService) { }
tes=null;
Compagneuser: Array<Compagnecsv> = [];

mois=[];
  calendarOptions: CalendarOptions = {
   
    initialView: ''
  
  };
  calendarOptionspartie2: CalendarOptions = {
    //initialDate: this.mydate,
    //initialView: 'dayGridMonth',
    weekends: false, // initial value

  };
  
  calendarOptions3: CalendarOptions;
  calendarOptions2: CalendarOptions = {
  };
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
dt=600
mydate="2010-02-01"
selectedDevice="2022";

campagnes:Compagnecsv[];
  ngOnInit(): void {
    //
    this.selectedDevice=localStorage.getItem('datemanagement')
    console.log("la date of option initial ",localStorage.getItem('datemanagement'))
    this.calendarOptions3={
      initialDate:localStorage.getItem('datemanagement')+"-01-01",
      editable: true,
    }
    this.mydate="2000-02-01"
    this.campagneservice.getcollectiocompagnecsv().subscribe(prods => {    
      console.log("prdfi33n")  ;  
      console.log(prods);      
           this.campagnes = prods["hydra:member"];
           console.log('tables final user',this.campagnes);
           this.getcompagneforuser();
           this.Compagneuser.forEach(element => {
            console.log(element.datecreation.substring(0,10));
            this.statistique(element.datecreation.substring(0,10));
           });
           var calendarOptions7 : CalendarOptions = {
            initialView: 'dayGridMonth',
            dateClick: this.handleDateClick.bind(this), // bind is important!
            events:this.eventss
          };
         var myDate= formatDate(new Date(), 'yyyy/MM/dd', 'en');
          //var myDate = new DatePipe();
          console.log("my current date",myDate);
          //this.selectText(String(myDate).substring(0,4))

          this.calendarOptions2=calendarOptions7;
      //console.log("deuxiem table ",this.factures2);
    });
  }
  e:String;
  eventss=[
    {
      title:"hello",
      date : String("2020-09-01")
    }
  ]
statistique(datee:String){
  console.log('statistique')
  var count=0;
  this.campagnes.forEach(element => {
    console.log(element.datecreation.substring(0,10));
console.log('date',datee);
    if(element.datecreation.substring(0,10)===datee){
          count=count+1;
    }
  });
  console.log('count',count)
  this.tes=String(count);
  var kayn="la";
  this.eventss.forEach(element => {
    if(element.date==datee){
     kayn="ah";
    }
  });
  if(kayn=="la"){
    this.eventss.push({title:this.tes,
      date :String(datee)})
  }
  //var event:EventAddArg;
  //event.
 // this.calendarOptions2.eventAdd(event);
}
variables2=['2020','2021','2022'];
 statisqtiquemois(mois:String){
  console.log('statistique de mois ',mois)
  var count=0;
  this.Compagneuser.forEach(element => {
    console.log(element.datecreation.substring(0,10));
console.log('date',mois);
    if(element.datecreation.substring(0,7)===mois){
          count=count+1;
    }
  });
  console.log("eset ",count)
return count;
}
selectText(newValue2) {
  //this.calendarOptions3.initialDate="2021-10-02";
  this.mydate="2013-02-01";
  localStorage.setItem('datemanagement',newValue2);
  this.dt=600;
  this.calendarOptions3.initialDate="2013-02-01";
  //this.ngOnInit();
  this.calendarOptions3.height=500;
  console.log('oki goooooooooooo')
  var   calendarOptions33: CalendarOptions = {
    initialView: 'dayGridMonth',
    initialDate: String(this.mydate),
    editable: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: this.tes, date: '2021-11-03' },
      { title: 'event 2', date: '2021-2-02' },
      { title: 'total', date: '2021' }

    ]
  };
  
  this.calendarOptions2=calendarOptions33
  //this.ngOnInit();

  console.log("hhhhhhhoooohhhhhhhhhh",newValue2);
  for(let k=0;k<13;k++){
    console.log(k);
    if(k<10){
     this.mois[k+1]=this.statisqtiquemois(newValue2+'-0'+String(k))
    }
    else
    this.mois[k+1]=this.statisqtiquemois(newValue2+'-'+String(k))
  }
  console.log('resulta fina est ',this.mois);
 // this.statisqtiquemois(newValue2+"-11")
  //console.log(this.courriers[newValue-1].titre);
  //console.log("hellow",this.ckEditorBlurEle);
  //var selection = event.editor.getSelection();
  //this.ckEditorBlurEle.editor.insertHtml("[#"+newValue2+"#]");
    //this.myEditor.instance.insertText(value);
    location.reload();
  }


getcompagneforuser(){
  this.campagnes.forEach(element => {
    if(element.iduser==localStorage.getItem("iduser")){
    this.Compagneuser.push(element);}
  });
  console.log("code",this.Compagneuser);

}
}
