import {Component,OnInit,Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {ContactService} from './contact.service'; 
import{Contact,AddContact} from '../contact';

import { Http, RequestOptions, Headers } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'ct-edit',
    templateUrl: './contact-edit.component.html',
})

export class ContactEditComponent implements OnInit 
{

   cnt : Contact;
   API_URL: string = 'http://localhost:50194/api/contact';


   constructor(
       
        private cts : ContactService,
        private route: ActivatedRoute,
        public authHttp: AuthHttp
             
   ){}

   ngOnInit()
   {         
        this.route.params.subscribe(param => 
        {
                this.authHttp.get(`${this.API_URL}/${param['id']}`)
                    .map(res => res.json())
                    .subscribe( (res : Contact ) => this.cnt=res);

        });
   }

   updateContact(id,ctn,cte,cta,ctp)
   {
        let cc = new Contact(id,ctn,cte,cta,ctp);
        let requestedBody = JSON.stringify(cc);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.authHttp.put(`${this.API_URL}/${id}`,requestedBody,options)
            .map(res => res.json())
            .subscribe( (res : Contact ) => this.cnt=res);
   }

}
