import {Component} from '@angular/core';
import {ContactService} from '../Services/contact.service'; 
import{Contact} from '../contact';
import { OnInit } from '@angular/core';

@Component({
    selector:'pb-list',
    templateUrl: './pb-list.component.html',
    styleUrls: [ './pb-list.component.css' ],
    providers : [ContactService],

})

export class PbListComponent implements OnInit 
{

    contacts : Contact[]; 

    ngOnInit(): void 
    {
        this.getContacts();
    }

    getContacts () : void 
    {
        this.contacts = this.contactService.getContacts();
    }

    constructor(private contactService : ContactService){}

}



