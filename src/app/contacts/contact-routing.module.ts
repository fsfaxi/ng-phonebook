import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContactFormComponent} from './contact-form.component';
import { ContactDetailComponent}   from './contact-detail.component';

 
const contactRoutes: Routes = [

    {path: 'contact',component:ContactDetailComponent,
          children: [
      {path: ':id',component: ContactDetailComponent,data: {name: 'detail'} },
      {path: 'edit/:id',component: ContactDetailComponent,data: {name: 'edit'} },
      {path: 'delete/:id',component: ContactDetailComponent,data: {name: 'delete'} },
      {path: 'add',component: ContactFormComponent }
    ]
    },
  
];
 
@NgModule({
  imports: [ RouterModule.forChild(contactRoutes) ],
  exports: [ RouterModule ]
})
export class ContactRoutingModule {}