import { Component } from '@angular/core';

import { CommonModule }       from '@angular/common';
import {AuthService} from './auth/auth.service'; 


@Component({
  selector: 'my-app',
  template: `     
       
        <router-outlet></router-outlet>
        
  `,
  
  
 
})
export class AppComponent  
{ 
     constructor( 
        private authService : AuthService,
     ){}
}
