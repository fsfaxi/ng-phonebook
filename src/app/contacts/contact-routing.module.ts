import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContactAddComponent} from './contact-add.component';
import { ContactDetailComponent}   from './contact-detail.component';
import {ContactComponent} from './contact.component';
import{ContactEditComponent} from './contact-edit.component';
import{ContactDeleteComponent} from './contact-delete.component';


 
const contactRoutes: Routes = [

    {path: 'contact',component:ContactComponent, data: {name: 'contact'},
          children: [
      {path: ':id',component: ContactDetailComponent },
      {path: 'edit/:id',component: ContactEditComponent },
      {path: 'delete/:id',component: ContactDeleteComponent },
      {path: 'add',component: ContactAddComponent }
    ]
    },
  
];
 
@NgModule({
  imports: [ RouterModule.forChild(contactRoutes) ],
  exports: [ RouterModule ]
})
export class ContactRoutingModule {}