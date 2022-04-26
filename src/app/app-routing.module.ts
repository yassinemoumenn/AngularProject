import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { NavHorComponent } from './nav-hor/nav-hor.component';
import { NavComponent } from './nav/nav.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
//import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ProduitsComponent } from './produits/produits.component';
import { UtilsComponent } from './utils/utils.component';
import { AddUtilsComponent } from './add-utils/add-utils.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ModifierProfilComponent } from './modifier-profil/modifier-profil.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ModPwdComponent } from './mod-pwd/mod-pwd.component';
import { MessageVariableComponent } from './message-variable/message-variable.component';
import { PublipostageComponent } from './publipostage/publipostage.component';
import { VereficationComponent } from './verefication/verefication.component';
import { LetrreformatComponent } from './letrreformat/letrreformat.component';
//import { CourierComponent } from './courier/courier.component';
//import { CourierrComponent } from './courierr/courierr.component';
import { ConfigurationtemplateComponent } from './configurationtemplate/configurationtemplate.component';
import { TototestComponent } from './tototest/tototest.component';
import { MardComponent } from './mard/mard.component';
//import { CourriereComponent } from './courriere/courriere.component';
import { TemplatecourrierComponent } from './templatecourrier/templatecourrier.component';
import { UserrsComponent } from './userrs/userrs.component';
import { AddUserrComponent } from './add-userr/add-userr.component';
import { ViewcourrierComponent } from './viewcourrier/viewcourrier.component';
import { ChargerclientcsvComponent } from './chargerclientcsv/chargerclientcsv.component';
import { AddcourrierComponent } from './addcourrier/addcourrier.component';
import { CreercompagnecourrierComponent } from './creercompagnecourrier/creercompagnecourrier.component';
import { CompagnecourrierComponent } from './compagnecourrier/compagnecourrier.component';
import { CreercompagneComponent } from './creercompagne/creercompagne.component';
import { TowbuttonComponent } from './towbutton/towbutton.component';
import { FactureComponent } from './facture/facture.component';
import { CompagneWhtsAppComponent } from './compagne-whts-app/compagne-whts-app.component';
import { ResumeComponent } from './resume/resume.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { ManagementCampagneComponent } from './management-campagne/management-campagne.component';
import { FacturesmsComponent } from './facturesms/facturesms.component';
import { CampagnesmsComponent } from './campagnesms/campagnesms.component';
import { StatistiqueComponent } from './statistique/statistique.component';


//import { ModifierpwdComponent } from './modifierpwd/modifierpwd.component';
//import { ModifierpswdComponent } from './modifierpswd/modifierpswd.component';
//import { AddProduitComponent } from './add-produit/add-produit.component'
//import { ProduitsComponent } from './produits/produits.component'; //
//import { Produits2Component } from './produits2/produits2.component'; 
//import { UpdateProduitComponent } from 'ANGULAR_Atelier05/src/app/update-produit/update-produit.component';
//import { Login2Component } from './login2/login2.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'slide', component: SlidebarComponent},
  {path: 'login2', component: LoginComponent},
  {path: 'login1', component: LoginComponent},
  {path: "produits", component : ProduitsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register', component: RegisterComponent},
  {path : "nav2" ,component:NavHorComponent, },
  {path : "util" ,component:UtilisateursComponent},
  {path: 'modifierpassword', component: ModPwdComponent},
  {path: "", redirectTo: "login2", pathMatch: "full" } ,
  {path: "utilisateur", component : UtilsComponent}, 
  {path: "users", component : UserrsComponent,}, 
  {path: "ajouteruser", component : AddUserrComponent}, 
  { path: "", redirectTo: "user", pathMatch: "full" },
  { path: "", redirectTo: "utilisateur", pathMatch: "full" },
  {path: "add-utils", component : AddUtilsComponent},
  {path: "", redirectTo: "produits", pathMatch: "full" },
 {path : "modifer" ,component : ModifierProfilComponent},
 {path : "publi" ,component : PublipostageComponent},
 {path : "messagevariable" ,component : MessageVariableComponent},
 {path : "verf" ,component : VereficationComponent},
{path : "format" ,component : LetrreformatComponent},
{path : "config" ,component : ConfigurationtemplateComponent},
{path : "to" ,component : TototestComponent},
{path : "mam" ,component : MardComponent},
{path : "templatce" ,component : TemplatecourrierComponent},
{path : "viewcourrier" ,component : ViewcourrierComponent},
{path : "clientcontroller" ,component : ChargerclientcsvComponent},
{path : "addcourrier" ,component : AddcourrierComponent},
{path : "creercompagne" ,component : PublipostageComponent},
{path : "CreercompagnecourrierComponent" ,component : CreercompagnecourrierComponent},
{path : "crcomapgne" ,component : CreercompagneComponent},
{path : "towbutton" ,component : TowbuttonComponent},
{path : "facture" ,component : FactureComponent},
{path : "resume" ,component : ResumeComponent},
{path : "Compagne WhtsApp" ,component : CompagneWhtsAppComponent},
{path : "upload file" ,component : UploadfileComponent},
{path : "management Campagne" ,component : ManagementCampagneComponent},
{path : "facturesms" ,component : FacturesmsComponent},
{path : "Compagne Sms" ,component : CampagnesmsComponent},
{path : "statistique" ,component : StatistiqueComponent},







 
 
//{path: "produits", component : ProduitsComponent},  
//{path: "add-produit", component : AddProduitComponent},
//{path: "produits2", component : Produits2Component},  
//{path: "updateProduit/:id",  component: UpdateProduitComponent} ,
// {path:  'login2', component: Login2Component} 
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
