import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {PbListComponent} from './Components/pb-list/pb-list.component';
import {ContactDetailComponent} from './Components/contactDetail/contact-detail.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      
      AppComponent,
      PbListComponent,
      ContactDetailComponent,
      
  ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
