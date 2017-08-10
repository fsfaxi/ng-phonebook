import {Component,OnInit,Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import {ContactService} from './contact.service'; 
import { AuthService} from '../auth/auth.service';

import{Contact} from '../contact';


import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'ct-detail',
    templateUrl: './contact-detail.component.html',
})

export class ContactDetailComponent implements OnInit 
{

   cnt_details : Contact;
   API_URL: string = 'http://localhost:50194/api/contact';

   constructor(
       
        private cts : ContactService,
        private route: ActivatedRoute,
        private auth : AuthService,
        public authHttp: AuthHttp
             
   ){}

   ngOnInit()
   {     
         this.route.params.subscribe(param => 
            {
                this.getContactApi(param['id']);
            });
   }

   getContactApi (id)
   {
        this.authHttp.get(`${this.API_URL}/${id}`)
          .map(res => res.json())
          .subscribe( (res : Contact ) => this.cnt_details=res);
  }


}
