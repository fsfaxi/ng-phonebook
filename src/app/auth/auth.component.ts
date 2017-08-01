import { Component } from '@angular/core';

import { CommonModule }       from '@angular/common';
import {AuthService} from './auth.service'; 

@Component({
  selector: 'ng-auth',

//   template:'<h1>Hellow auth</h1>'
 templateUrl: './auth.component.html',  
 
 
})
export class AuthComponent  
{ 
     constructor( 
        private auth : AuthService,
     ){}
}
