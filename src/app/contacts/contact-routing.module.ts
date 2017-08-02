import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContactAddComponent} from './contact-add.component';
import { ContactDetailComponent}   from './contact-detail.component';
import {ContactComponent} from './contact.component';
import{ContactEditComponent} from './contact-edit.component';
import{ContactDeleteComponent} from './contact-delete.component';
import {AuthGuardService as AuthGuard} from '../auth/auth-guard.service';
 
const contactRoutes: Routes = [

    {path: 'contact',component:ContactComponent, data: {name: 'contact'},
          children: [
      {path: ':id',component: ContactDetailComponent },
      {path: 'edit/:id',component: ContactEditComponent, canActivate: [AuthGuard] },
      {path: 'delete/:id',component: ContactDeleteComponent, canActivate: [AuthGuard] },
      {path: 'add/:id',component: ContactAddComponent, canActivate: [AuthGuard] },
 
      
    ]
    },
  
];
 
@NgModule({
  imports: [ RouterModule.forChild(contactRoutes) ],
  exports: [ RouterModule ]
})
export class ContactRoutingModule {}