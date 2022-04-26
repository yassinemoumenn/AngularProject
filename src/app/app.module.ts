import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavHorComponent } from './nav-hor/nav-hor.component';
import { AddUtilsComponent } from './add-utils/add-utils.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!s
//import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ProduitsComponent } from './produits/produits.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { UtilsComponent } from './utils/utils.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ModPwdComponent } from './mod-pwd/mod-pwd.component';
import { MessageVariableComponent } from './message-variable/message-variable.component';
import { PublipostageComponent } from './publipostage/publipostage.component';
import { VereficationComponent } from './verefication/verefication.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import{MatBadgeModule} from '@angular/material/badge';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { LetrreformatComponent } from './letrreformat/letrreformat.component';
//import { CourierComponent } from './courier/courier.component';
//import { CourierrComponent } from './courierr/courierr.component';
import { ConfigurationtemplateComponent } from './configurationtemplate/configurationtemplate.component';
import { TototestComponent } from './tototest/tototest.component';
import { MardComponent } from './mard/mard.component';
import { EditorModule } from "@tinymce/tinymce-angular";
//import { CKEditorModule } from 'ng2-ckeditor';
import { CKEditorModule } from 'ngx-ckeditor';

//import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TemplatecourrierComponent } from './templatecourrier/templatecourrier.component';
import { UserrsComponent } from './userrs/userrs.component';
import { AddUserrComponent } from './add-userr/add-userr.component';
import { ViewcourrierComponent } from './viewcourrier/viewcourrier.component';
import { ChargerclientcsvComponent } from './chargerclientcsv/chargerclientcsv.component';
import { AddcourrierComponent } from './addcourrier/addcourrier.component';
import { CreercompagnecourrierComponent } from './creercompagnecourrier/creercompagnecourrier.component';
import { CreercompagneComponent } from './creercompagne/creercompagne.component';
import { TowbuttonComponent } from './towbutton/towbutton.component';
import { FactureComponent } from './facture/facture.component';
import { CompagneWhtsAppComponent } from './compagne-whts-app/compagne-whts-app.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { ResumeComponent } from './resume/resume.component';
import { ManagementCampagneComponent } from './management-campagne/management-campagne.component';
import { FacturesmsComponent } from './facturesms/facturesms.component';
import { CampagnesmsComponent } from './campagnesms/campagnesms.component';
import { MsgvocaleComponent } from './msgvocale/msgvocale.component';
import { EncrDecrService } from './service/encr-decr.service';
import { StatistiqueComponent } from './statistique/statistique.component';
//import { HouseModule } from './Modules/house/house.module';
//import { ModifierpwdComponent } from './modifierpwd/modifierpwd.component';
//import { ModifierpswdComponent } from './modifierpswd/modifierpswd.component';
//import { UtilisateuComponent } from './utilisateu/utilisateu.component';
//import { Produits2Component } from './produits2/produits2.component';
//import { UpdateProduitComponent } from './servirce/update-produit/update-produit.component';
//import { Login2Component } from './servirce/login2/login2.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    AppComponent,
    AddUtilsComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    NavHorComponent,
    UtilisateursComponent,
    ProduitsComponent,
    UtilisateursComponent,
    UtilsComponent,
    UsersComponent,
    AddUserComponent,
    ModifierProfilComponent,
    SlidebarComponent,
    ModPwdComponent,
    MessageVariableComponent,
    PublipostageComponent,
    VereficationComponent,
    LetrreformatComponent,
    ConfigurationtemplateComponent,
    TototestComponent,
    MardComponent,
    TemplatecourrierComponent,
    UserrsComponent,
    AddUserrComponent,
    ViewcourrierComponent,
    ChargerclientcsvComponent,
    AddcourrierComponent,
    CreercompagnecourrierComponent,
    CreercompagneComponent,
    TowbuttonComponent,
    FactureComponent,
    CompagneWhtsAppComponent,
    UploadfileComponent,
    ResumeComponent,
    ManagementCampagneComponent,
    FacturesmsComponent,
    CampagnesmsComponent,
    MsgvocaleComponent,
    StatistiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NoopAnimationsModule,
    RichTextEditorModule,
   CKEditorModule,
   EditorModule,
   FullCalendarModule ,
   NgbModule
   

  ],
  providers: [EncrDecrService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
