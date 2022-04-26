import { enableProdMode, EventEmitter, Injectable } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


enableProdMode();
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  //import { EventEmitter, Injectable } from "angular2/core";
  import { LoginComponent } from './app/login/login.component';
  