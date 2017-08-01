import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthCallbackComponent} from './auth/auth-callback.component';

export const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full'},
  { path: 'callback', component:AuthCallbackComponent},
  
  // { path: '', redirectTo: '/contact', pathMatch: 'full'},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}