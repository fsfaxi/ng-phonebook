import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {PbListComponent} from './contacts/pb-list.component';
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
      PbListComponent,
      ContactDetailComponent,
      
  ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
