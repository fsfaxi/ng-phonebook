import {Component,Directive} from '@angular/core';
import {ContactService} from './contact.service'; 
import{Contact} from '../contact';
import { OnInit } from '@angular/core';
import {ContactDetailComponent} from './contact-detail.component'

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


@Component({

    selector:'ct-form',
    templateUrl: './contact-form.component.html',

    

})

export class ContactFormComponent implements OnInit 
{

    ct : Contact; 
    
    constructor( 
        private contactService : ContactService,
        private route: ActivatedRoute,
        private location: Location

    ){}

    ngOnInit(): void 
    {
        
 
    }

    addContact(ctn,cte,cta,ctp)
    {
        let cc = new Contact(18,ctn,cte,cta,ctp);
        this.contactService.addContact(cc);
    }






}



