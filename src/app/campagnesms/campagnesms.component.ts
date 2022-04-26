import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campagnesms',
  templateUrl: './campagnesms.component.html',
  styleUrls: ['./campagnesms.component.css']
})
export class CampagnesmsComponent implements OnInit {

  constructor(private rout:Router) { }
  contentmessage="";
  variables2=[];
  selectedDevice="";
  selectedDevice2="Contrat";
  typemessage="";
  langue="francais";
  taillemessage=0;
  nembremessage=0; 
  sendermessag=["Contrat","DernierAvis","Important","Information","Rappelle","Urgent"]
  selectedpromotion=""
  PromotionalCategory=["Promotion","Prospection","Information"]
  sendermessageselected="";
  ngOnInit(): void {
    this.variables2=JSON.parse(localStorage.getItem("notrtrVA"));
    if(localStorage.getItem('precedentresume')==='true' ){
    this.typemessage=localStorage.getItem("typemessage");
    this.contentmessage=localStorage.getItem("contentmessage");
    this.langue=localStorage.getItem('languemessage');
    this.sendermessageselected=localStorage.getItem('senderid');
    this.selectedpromotion=localStorage.getItem("promtional");
    //localStorage.setItem("precedentresume",'false');
  }
  }
  lll=[,'À' ,'Â' ,'â', 'Ä'  ,'Ã' ,'ã' ,'ç' 
   ,'È', 'Ê', 'ê', 'Ë', 'ë',  'Ì', 'Î', 'î', 'Ï', 'ï' , 'Ñ' ,'ñ'  ,'Ò', 'ò', 'Ô',
    'ô', 'Ö',  'Õ', 'õ',
      'Q',  'Ù', 'ù', 'Û', 'û', 'Ü', 'ü', 
      'á' ,'É' ,'Í ','í' ,'Ó ','ó' ,'Ú' ,'ú' ,'Ý' ,'ý'
    ,'é','è','à','ü','ñ','ö','ä','ù','ì','ò','Ç','Ø','ø','Å','å','Æ','æ','ß','É','¤','¡'
    ,'Ä','Ö','Ñ','Ü','§','¿','£','¥'
    ,'ا' ,'ب'  ,'ت '  ,'ج' ,'ث',
     ,'خ' 
    ,'د' 
    ,'ذ','ر'  
     ,'ش ','ز' ,'س' ,'ص' ,'ض ','ط','ظ' ,'ع' ,'غ'  ,'ق' ,'ك' 
    ,'ل' ,'م' ,'ن' ,'ه' ,'و' ,'ي' ,'ء',
    ,'ى' ,'ئ ','ؤ' ,'ة ','إ' ,'أ' ,'ٱ', 'آ'
  ,'ح',
  '١','٢','٣','٤','٥','٦','٧','٨','٩'
]
  doSomething(value){
    let kkkk=0;
  for (const iterator of this.lll) {
    console.log("lll",iterator);
    kkkk=kkkk+this.contentmessage.split(iterator).length-1;
  }
   /* if(value.key==="Backspace" && (this.taillemessage-1)%160===0 && this.taillemessage!=0){
      this.nembremessage=this.nembremessage-1;
    }*/
    //console.log(value)
    console.log('kkk',kkkk)
    let ll=this.contentmessage.split('|').length-1;
    let ll1=this.contentmessage.split('{').length-1;
    let ll2=this.contentmessage.split('}').length-1;
    let ll3=this.contentmessage.split('^').length-1;
    let ll4=this.contentmessage.split('[').length-1;
    let ll5=this.contentmessage.split(']').length-1;
    let ll6=this.contentmessage.split('\\').length-1;
    let ll7=this.contentmessage.split('~').length-1;
    //this.taillemessage=this.contentmessage.length+ll+ll1+ll2+ll3+ll4+ll5+ll6+ll7
    this.taillemessage=this.contentmessage.length+kkkk;
    if(this.taillemessage>0 && this.taillemessage<=160){
      this.nembremessage=1;
    }
    if(this.taillemessage>160 && this.taillemessage<=320){
      this.nembremessage=2;
    }
    if(this.taillemessage>320 && this.taillemessage<=480){
      this.nembremessage=3;
    }
    if(this.taillemessage==0){
      this.nembremessage=0;
    }
    //if((this.taillemessage-1)%160===0){
      //this.nembremessage=this.nembremessage+1;
      //this.taillemessage=0;
    //}
    
    console.log('ha event',value.key)
    console.log('hihi')
  }
  selectText(newValue2) {
    console.log(newValue2);
    this.contentmessage=this.contentmessage+"[#"+newValue2+"#]";
    console.log(this.contentmessage);

    //console.log("hellow",this.ckEditorBlurEle);
    //var selection = event.editor.getSelection();
    //this.ckEditorBlurEle.editor.insertHtml("[#"+newValue2+"#]");
      //this.myEditor.instance.insertText(value);
  }
  selectText2(newValue2) {
    console.log(newValue2);
   //this.selectedDevice2=newValue2;
    this.sendermessageselected=newValue2;
    console.log("promotion",this.selectedpromotion)
    this.selectedpromotion=this.selectedpromotion;
    localStorage.setItem("senderid",this.sendermessageselected)
  }
  selectText3(newValue3) {
    console.log(newValue3);
    //this.selectedDevice2=newValue2;
    this.selectedpromotion=newValue3;
    localStorage.setItem("promtional",this.selectedpromotion)

  }
  precedent(){
    this.rout.navigate(["upload file"]);
    localStorage.setItem('routeprecedentsms','true');
    
  }
  clearmessag(){
    console.log("clearrr")
    this.contentmessage="";
    this.sendermessageselected="";
    this.langue="";
    this.taillemessage=this.contentmessage.length

  }
  nombremessagenv="";
  Suivant2(){
    localStorage.setItem("contentmessage",this.contentmessage);
    localStorage.setItem("typemessage",this.typemessage);
    localStorage.setItem('languemessage',this.langue);
    localStorage.setItem('taillemessage',String(this.contentmessage.length))
    localStorage.setItem('nembreunite',String(this.nembremessage))
   if(this.typemessage==="simple"){
    this.nombremessagenv=localStorage.getItem("nembreligneofdatatcompagne");
    var total=0.5*Number(this.nembremessage)*Number(this.nombremessagenv);
    localStorage.setItem('facturetotalcompagne',String(total))
    localStorage.setItem("unite","0.5");
    console.log('simple hh somplee')
   }
   if(this.typemessage==="variable"){
    this.nombremessagenv=localStorage.getItem("nembreligneofdatatcompagne");
    var total=1*Number(this.nembremessage)*Number(this.nombremessagenv);
    localStorage.setItem('facturetotalcompagne',String(total))
    console.log('simple hh somplee')
   localStorage.setItem("unite","1");
   }
    this.rout.navigate(["resume"]);
    //this.rout.navigate(['upload file'])
  }
  onItemChange(value){
    console.log(" Value is : ", value );
    this.langue=value;
  }
  onItemChange3(value){
    console.log(" Value is : ", value );
    this.typemessage=value;
  }
}



