import {Component,Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { Http, RequestOptions, Headers } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import {ContactService} from './contact.service'; 

import{Contact ,AddContact} from '../contact';
import { OnInit } from '@angular/core';


import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


@Component({

    selector:'ct-add',
    templateUrl: './contact-add.component.html',

    

})

export class ContactAddComponent implements OnInit 
{

    ct : Contact;
    API_URL: string = 'http://localhost:50194/api/contact'; 
    
    constructor( 
        private contactService : ContactService,
        private route: ActivatedRoute,
        private location: Location,
        public authHttp: AuthHttp

    ){}

    ngOnInit(): void 
    {
        
 
    }

    addContact(ctn,cte,cta,ctp)
    {
        let cc = new AddContact(ctn,cte,cta,ctp);
        let requestedBody = JSON.stringify(cc);
        console.log(requestedBody);
        this.addContactApi(requestedBody);
    }

    addContactApi (requestedBody)
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.authHttp.post(`${this.API_URL}`,requestedBody,options)
            .map(res => res.json())
            .subscribe( (res : Contact ) => this.ct=res);
    }





}



