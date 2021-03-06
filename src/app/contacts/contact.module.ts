import { NgModule }      from '@angular/core';



import { RouterModule }   from '@angular/router';
import { CommonModule }       from '@angular/common';

import {ContactComponent} from './contact.component';
import {ContactListComponent} from './contact-list.component';
import {ContactDetailComponent} from './contact-detail.component';
import {ContactAddComponent} from './contact-add.component';
import{ContactRoutingModule} from './contact-routing.module';
import{ContactEditComponent} from './contact-edit.component';
import{ContactDeleteComponent} from './contact-delete.component';



@NgModule({
  imports:      [
    //  BrowserModule, 
     RouterModule,
     CommonModule,
     ContactRoutingModule

     ],
  declarations: [ 

      ContactListComponent,
      ContactDetailComponent,
      ContactAddComponent,
      ContactEditComponent,
      ContactDeleteComponent,
      ContactComponent,
     
      
  ],
  exports: [ 
     
      ContactListComponent,
      ContactDetailComponent,
      ContactAddComponent, // Todo: why must add this to exports?
    
  
  ],
//   bootstrap:    [ AppComponent ],
  
})
export class ContactModule { }
