import { Component, HostListener, OnInit } from '@angular/core';
import * as jsPDfF from 'jspdf';
import html2canvas from 'html2canvas';
//import { time } from 'console';

@Component({
  selector: 'app-tototest',
  templateUrl: './tototest.component.html',
  styleUrls: ['./tototest.component.css']
})
export class TototestComponent implements OnInit {
  data: [][];
  rrllogo="";
  conteur=0;
  urlfin="";
  vario: Number=0;
  a : Number=1;
  localUrl="";
  nomcsv="";
 // Nom_Client="";
  nomfilvcard="";
  messageenv : String
  constructor() { }

  ngOnInit(): void {
  this.rrllogo= localStorage.getItem("urllogo");
  }

  functiiopdf(){
    for(var i = 1; i <= 2; i++){
    var Nom_Client;
    this.vario=i;
    console.log('hii',i);
    Nom_Client='an',this.a;
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    this.a=1;
    console.log('anouar',this.a);
    var imgWidth = 208;
    var pageHeight = 205;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDfF.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('b.pdf'); // Generated PDF
     
  });
}
   /* console.log("pdf");
    const doc= new jsPDfF.jsPDF();
    //doc.text("holla dear",15,15);
    doc.setFontSize(40);
    //doc.text(30, 20, 'Hello world!');
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    doc.output('datauri');
    doc.addImage(this.localUrl, 'JPEG', 0, 0, 10,10 );
    doc.addImage(this.localUrl, 'JPEG', 0, 0, 10,10 );
    doc.save('test1ZE2.pdf');*/
  }


}
