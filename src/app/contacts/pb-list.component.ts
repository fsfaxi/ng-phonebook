import {Component,Directive} from '@angular/core';
import {ContactService} from './contact.service'; 
import{Contact} from '../contact';
import { OnInit } from '@angular/core';
import {ContactDetailComponent} from './contact-detail.component'


@Component({
    selector:'pb-list',
    templateUrl: './pb-list.component.html',
    styleUrls: [ './pb-list.component.css' ],
    providers : [ContactService],
    

})

export class PbListComponent implements OnInit 
{

    contacts : Contact[]; 

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



}



