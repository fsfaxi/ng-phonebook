import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ContactComponent} from './contacts/contact.component';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { ContactModule }     from './contacts/contact.module';
import {AuthModule} from './auth/auth.module';
import { RouterModule }   from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import {ContactService} from './contacts/contact.service'; 
import {AuthService} from './auth/auth.service'; 

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

@NgModule({
  imports:      [
     BrowserModule, 
     ContactModule,
     AppRoutingModule,
     AuthModule

  ],
  declarations: [ 
      
      AppComponent,
      ContactComponent,

      
  ],
  bootstrap:    [ AppComponent ],
  providers : [
    
    ContactService,
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
    ],
  
})
export class AppModule { }
