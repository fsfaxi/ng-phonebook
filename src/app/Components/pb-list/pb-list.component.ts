import {Component,Directive} from '@angular/core';
import {ContactService} from '../../Services/contact.service'; 
import{Contact} from '../../contact';
import { OnInit } from '@angular/core';
import {ContactDetailComponent} from '../contactDetail/contact-detail.component'
import {ContactSelectedService} from '../../Services/contact-selected.service';



@Component({
    selector:'pb-list',
    templateUrl: './pb-list.component.html',
    styleUrls: [ './pb-list.component.css' ],
    providers : [ContactService],
    

})

export class PbListComponent implements OnInit 
{

    contacts : Contact[]; 
    selectedContact : Contact;


    ngOnInit(): void 
    {
        this.getContacts();
 
    }

    // onSelect(ct : Contact) : void
    // {
    //     this.selectedContact=ct;        
    // }

    getContacts () : void 
    {
        this.contactService.getContacts().then(ct => this.contacts = ct);

    }

    // ctChange (ct : Contact)
    // {
    //     this.cts.changeCT(ct);
    // }

    constructor(private contactService : ContactService,private cts : ContactSelectedService){}

}



