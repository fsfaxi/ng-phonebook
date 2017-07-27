import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { RouterModule }   from '@angular/router';
import { ContactModule }     from './contacts/contact.module';
import {ContactRoutingModule} from './contacts/contact-routing.module';


@NgModule({
  imports:      [
     BrowserModule, 
     ContactModule,
     ContactRoutingModule

     ],
  declarations: [ 
      
      AppComponent,
      
  ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
