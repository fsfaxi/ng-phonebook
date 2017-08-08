import { Component } from '@angular/core';

import { CommonModule }       from '@angular/common';
import {AuthService} from './auth/auth.service';

import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'my-app',
  template: `     
        
        <ng-auth></ng-auth>
        <auth-profile></auth-profile>
        <app-ping></app-ping>
        <router-outlet></router-outlet>
        
  `,
  
  
 
})
export class AppComponent  
{ 

    constructor(public auth: AuthService) {
      auth.handleAuthentication();
     }

}
