import {Component,OnInit,Input} from '@angular/core';

// import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Location }                 from '@angular/common';
import { AuthService} from '../auth/auth.service';

@Component({
    selector:'ct-main',
    templateUrl: './contact.component.html',
      styleUrls: [ './contact.component.css' ],

})

export class ContactComponent  
{
    
    constructor( 
        private auth : AuthService
    ){}


}
