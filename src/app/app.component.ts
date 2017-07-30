import { Component } from '@angular/core';
import {ContactService} from './contacts/contact.service'; 
import { CommonModule }       from '@angular/common';



@Component({
  selector: 'my-app',
  template: `
  
    <div id="app-container">
      <h1>Hello {{name}}</h1>
      <div id="app-innercontainer">
        <div id="app-left">
          <ct-list></ct-list>
          
        </div>
        <div id ="app-right">
           <router-outlet></router-outlet>
        </div>
      </div>
    </div>    
        
        
        
  `,
  styleUrls: [ './app.component.css' ],
  providers : [ContactService],
  
 
})
export class AppComponent  
{ 
  name = 'Angular';
  
}
