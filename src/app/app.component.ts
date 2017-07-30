import { Component } from '@angular/core';
import {ContactService} from './contacts/contact.service'; 
import { CommonModule }       from '@angular/common';



@Component({
  selector: 'my-app',
  template: `     
        
        <router-outlet></router-outlet>
        
  `,
  providers : [ContactService],
  
 
})
export class AppComponent  
{ 
 
}
