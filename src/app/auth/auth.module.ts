import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { CommonModule }       from '@angular/common';


import {AuthComponent} from './auth.component';
import {AuthCallbackComponent} from './auth-callback.component';
import {AuthProfileComponent} from './auth-profile.component';




@NgModule({
  imports:      [

      RouterModule,
      CommonModule,

     ],
  declarations: [ 

      AuthComponent,
      AuthCallbackComponent,
      AuthProfileComponent
     
      
  ],
  exports: [ 
     
     AuthComponent,
     AuthCallbackComponent,
     AuthProfileComponent
    
  
  ],

  
})
export class AuthModule { }
