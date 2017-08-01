import { Component } from '@angular/core';

import { CommonModule }       from '@angular/common';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'my-app',
  template: `     
        
        <ng-auth></ng-auth>
        <auth-profile></auth-profile>
        <router-outlet></router-outlet>
        
  `,
  
  
 
})
export class AppComponent  
{ 

    constructor(public auth: AuthService) {
      auth.handleAuthentication();
     }

}
