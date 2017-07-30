import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent }  from './app.component';
import {ContactListComponent} from './contact-list.component';
import {ContactDetailComponent} from './contact-detail.component';
import {ContactFormComponent} from './contact-form.component';

import { RouterModule }   from '@angular/router';
import { CommonModule }       from '@angular/common';
import{ContactRoutingModule} from './contact-routing.module';


@NgModule({
  imports:      [
    //  BrowserModule, 
     RouterModule,
     CommonModule,
     ContactRoutingModule

     ],
  declarations: [ 
      
    //   AppComponent,
      ContactListComponent,
      ContactDetailComponent,
      ContactFormComponent,
      
  ],
  exports: [ 
     
      ContactListComponent,
      ContactDetailComponent,
      ContactFormComponent,
  
  ],
//   bootstrap:    [ AppComponent ],
  
})
export class ContactModule { }
