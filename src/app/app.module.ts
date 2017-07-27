import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ContactListComponent} from './contacts/contact-list.component';
import {ContactDetailComponent} from './contacts/contact-detail.component';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule }     from './app-routing.module'


@NgModule({
  imports:      [
     BrowserModule, 
     AppRoutingModule

     ],
  declarations: [ 
      
      AppComponent,
      ContactListComponent,
      ContactDetailComponent,
      
  ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
