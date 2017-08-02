import {Component,OnInit,Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {ContactService} from './contact.service'; 
import { AuthService} from '../auth/auth.service';

import{Contact} from '../contact';


import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'ct-detail',
    templateUrl: './contact-detail.component.html',
})

export class ContactDetailComponent implements OnInit 
{

   cnt_details : Contact;

   constructor(
       
        private cts : ContactService,
        private route: ActivatedRoute,
        private auth : AuthService
             
   ){}

   ngOnInit()
   {         
        this.route.paramMap
            .switchMap((params: ParamMap) => this.cts.getContact(+params.get('id')))
            .subscribe(contact => this.cnt_details = contact);
   }

}
