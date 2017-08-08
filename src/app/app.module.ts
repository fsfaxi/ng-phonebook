import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {PingComponent} from './ping/ping.component';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { ContactModule }     from './contacts/contact.module';
import {AuthModule} from './auth/auth.module';
import { RouterModule }   from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import {ContactService} from './contacts/contact.service'; 
import {AuthService} from './auth/auth.service'; 
import {AuthGuardService } from './auth/auth-guard.service';


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
     AuthModule,
     HttpModule
     
  ],
  declarations: [ 
      
      AppComponent,
      PingComponent,


      
  ],
  bootstrap:    [ AppComponent ],
  providers : [
    
    ContactService,
    AuthHttp,
    AuthGuardService,
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
    ],
  
})
export class AppModule { }
