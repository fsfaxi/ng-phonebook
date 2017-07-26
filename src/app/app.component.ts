import { Component } from '@angular/core';
import {ContactSelectedService} from './Services/contact-selected.service';



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
        </div>

       
       
      </div>
      
    </div>    
        
        
        
  `,
  styleUrls: [ './app.component.css' ],
  providers : [ContactSelectedService],
  
 
})
export class AppComponent  
{ 
  name = 'Angular';
  
}
