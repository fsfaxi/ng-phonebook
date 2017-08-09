import {Component,Directive} from '@angular/core';
import 'rxjs/add/operator/switchMap';


import {ContactService} from './contact.service'; 
import{Contact} from '../contact';
import { OnInit } from '@angular/core';
import {ContactDetailComponent} from './contact-detail.component'


import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

@Component({

    selector:'ct-list',
    templateUrl: './contact-list.component.html',
    styleUrls: [ './contact-list.component.css' ],
    providers : [ContactService],
    

})

export class ContactListComponent implements OnInit 
{

    contacts : Contact[];
    API_URL: string = 'http://localhost:50194/api/contact';
    ct : Contact = new Contact (null,null,null,null,null);


    constructor( 
        private contactService : ContactService,
        private route: ActivatedRoute,
        private location: Location,
        public authHttp: AuthHttp

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



