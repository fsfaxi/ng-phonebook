import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {PbListComponent} from './Components/pb-list/pb-list.component';
import {ContactDetailComponent} from './Components/contactDetail/contact-detail.component';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import { AppRoutingModule }     from './app-routing.module'

// Imports for loading & configuring the in-memory web api



@NgModule({
  imports:      [
     BrowserModule, 
     HttpModule,
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
