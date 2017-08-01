import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ContactComponent} from './contacts/contact.component';
import {AuthComponent} from './auth/auth.component';


import { ContactModule }     from './contacts/contact.module';
import { RouterModule }   from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

import {ContactService} from './contacts/contact.service'; 
import {AuthService} from './auth/auth.service'; 



@NgModule({
  imports:      [
     BrowserModule, 
     ContactModule,
     AppRoutingModule

  ],
  declarations: [ 
      
      AppComponent,
      ContactComponent,
      AuthComponent
      
  ],
  bootstrap:    [ AppComponent ],
  providers : [ContactService,AuthService],
  
})
export class AppModule { }
