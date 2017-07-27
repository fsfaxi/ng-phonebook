import {Component,Directive} from '@angular/core';
import {ContactService} from './contact.service'; 
import{Contact} from '../contact';
import { OnInit } from '@angular/core';
import {ContactDetailComponent} from './contact-detail.component'


@Component({

    selector:'ct-list',
    templateUrl: './contact-list.component.html',
    styleUrls: [ './contact-list.component.css' ],
    providers : [ContactService],
    

})

export class ContactListComponent implements OnInit 
{

    contacts : Contact[];
    cc : Contact; 

    constructor( 
        private contactService : ContactService,

    ){}


    ngOnInit(): void 
    {
        this.getContacts();
 
    }


    getContacts () : void 
    {
        this.contactService.getContacts().then(ct => this.contacts = ct);

    }

    addContact(ct : Contact)
    {

        this.contactService.addContact(ct);
    }



}



