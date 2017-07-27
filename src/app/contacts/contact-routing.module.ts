import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ContactDetailComponent}   from './contact-detail.component';

 
const routes: Routes = [

    {path: 'detail/:id',component: ContactDetailComponent,data: {name: 'detail'} },
    {path: 'edit/:id',component: ContactDetailComponent,data: {name: 'edit'} }
    
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ContactRoutingModule {}