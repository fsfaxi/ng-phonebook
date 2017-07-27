import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ContactDetailComponent}   from './contact-detail.component';

 
const routes: Routes = [

    {path: 'detail/:id',component: ContactDetailComponent },
    {path: 'edit/:id',component: ContactDetailComponent }
    
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ContactRoutingModule {}