import {Component,OnInit,Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {ContactService} from '../../Services/contact.service'; 
import{Contact} from '../../contact';
import {PbListComponent} from '../pb-list/pb-list.component'; 
import {ContactSelectedService} from '../../Services/contact-selected.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
    selector:'ct-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: [ './contact-detail.component.css' ],
 

})

export class ContactDetailComponent implements OnInit 
{

   cnt : Contact;
   
   constructor(
       
        private cts : ContactService,
        private route: ActivatedRoute,
        private location: Location
                
       ){}

   ngOnInit()
   {
    //    this.cts.currentCT.subscribe(ct => this.cnt = ct);
        this.route.paramMap
              .switchMap((params: ParamMap) => this.cts.getContact(+params.get('id')))
              .subscribe(contact => this.cnt = contact);
   }
}
