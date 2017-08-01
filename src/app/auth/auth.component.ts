import { Component } from '@angular/core';

import { CommonModule }       from '@angular/common';
import {AuthService} from './auth.service'; 

@Component({
  selector: 'ng-auth',
  templateUrl: `./auth.component.html  `,
  
  
 
})
export class AuthComponent  
{ 
     constructor( 
        private authService : AuthService,
     ){}
}
