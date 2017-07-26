import { Component } from '@angular/core';


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
            <pb-view></pb-view>  
        </div>

       
       
      </div>
      
    </div>    
        
        
        
  `,
  styleUrls: [ './app.component.css' ],
 
})
export class AppComponent  
{ 
  name = 'Angular';
  
}
