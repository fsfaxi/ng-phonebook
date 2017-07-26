import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {PbListComponent} from './pb-list/pb-list.component';
import {PbViewComponent} from './pb-view/pb-view.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
      
      AppComponent,
      PbListComponent,
      PbViewComponent,
      
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
