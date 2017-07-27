import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ContactListComponent} from './contacts/contact-list.component';
import {ContactDetailComponent} from './contacts/contact-detail.component';
import {ContactFormComponent} from './contacts/contact-form.component';

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
      ContactFormComponent,
      
  ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
