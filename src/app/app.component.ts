import { Component } from '@angular/core';
import {ContactService} from './Services/contact.service'; 
import{Contact} from './contact';
import { OnInit } from '@angular/core';

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
  providers : [ContactService],
})
export class AppComponent implements OnInit  
{ 
  name = 'Angular';
  contacts : Contact[]; 

  ngOnInit(): void 
  {
    this.getContacts();
  }

  getContacts () : void 
  {
    this.contacts = this.contactService.getContacts();
  }

  constructor(private contactService : ContactService){}
}
