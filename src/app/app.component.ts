import { Component } from '@angular/core';
import {ContactSelectedService} from './Services/contact-selected.service';
import {ContactService} from './Services/contact.service'; 




@Component({
  selector: 'my-app',
  template: `
  
    <div id="app-container">
      <h1>Hello {{name}}</h1>
      <div id="app-innercontainer">
        <div id="app-left">
          <pb-list></pb-list>
        </div>
        <div id ="app-right">
            <ct-detail></ct-detail>
            <router-outlet></router-outlet>
        </div>
      </div>
    </div>    
        
        
        
  `,
  styleUrls: [ './app.component.css' ],
  providers : [ContactSelectedService,ContactService],
  
 
})
export class AppComponent  
{ 
  name = 'Angular';
  
}
