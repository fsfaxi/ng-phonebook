import {Component,OnInit,Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {ContactService} from './contact.service'; 
import{Contact} from '../contact';
import {ContactListComponent} from './contact-list.component'; 

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
    selector:'ct-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: [ './contact-detail.component.css' ],
 

})

export class ContactDetailComponent implements OnInit 
{

   cnt_details : Contact;
   cnt_edit : Contact;
   
   constructor(
       
        private cts : ContactService,
        private route: ActivatedRoute,
        private location: Location
                
       ){}

   ngOnInit()
   {

        if (this.route.snapshot.url[0].path == "detail" )
        {
          this.route.paramMap
              .switchMap((params: ParamMap) => this.cts.getContact(+params.get('id')))
              .subscribe(contact => this.cnt_details = contact);

        }
        else
        {
          this.route.paramMap
              .switchMap((params: ParamMap) => this.cts.getContact(+params.get('id')))
              .subscribe(contact => this.cnt_edit = contact);

        }
    
   }


}
