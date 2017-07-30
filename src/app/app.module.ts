import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ContactComponent} from './contacts/contact.component';

import { ContactModule }     from './contacts/contact.module';
import { RouterModule }   from '@angular/router';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  imports:      [
     BrowserModule, 
     ContactModule,
     AppRoutingModule

  ],
  declarations: [ 
      
      AppComponent,
      ContactComponent,
      
  ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
