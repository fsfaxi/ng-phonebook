import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactModule} from './contacts/contact.module';

export const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}