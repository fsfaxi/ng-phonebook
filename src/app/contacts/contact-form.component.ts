import {Component,Directive} from '@angular/core';
import {ContactService} from './contact.service'; 
import{Contact} from '../contact';
import { OnInit } from '@angular/core';
import {ContactDetailComponent} from './contact-detail.component'


@Component({

    selector:'ct-form',
    templateUrl: './contact-form.component.html',

    

})

export class ContactFormComponent implements OnInit 
{

    ct : Contact; 
    
    constructor( 
        private contactService : ContactService,

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



