import {Component,OnInit,Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {ContactService} from './contact.service'; 
import{Contact} from '../contact';


import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'ct-edit',
    templateUrl: './contact-edit.component.html',
})

export class ContactEditComponent implements OnInit 
{

   cnt : Contact;

   constructor(
       
        private cts : ContactService,
        private route: ActivatedRoute,
             
   ){}

   ngOnInit()
   {         
        this.route.paramMap
            .switchMap((params: ParamMap) => this.cts.getContact(+params.get('id')))
            .subscribe(contact => this.cnt = contact);
   }

   updateContact(id,ctn,cte,cta,ctp)
   {
        let cc = new Contact(id,ctn,cte,cta,ctp);
        this.cts.updateContact(cc,id);
   }

}
