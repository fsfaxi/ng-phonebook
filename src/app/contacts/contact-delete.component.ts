import {Component,OnInit,Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {ContactService} from './contact.service'; 
import{Contact} from '../contact';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';


import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'ct-delete',
    template: `     
        <div *ngIf="cnt">
            <h1>Are you sure you want to delete {{cnt.name}} contact ?</h1>
            <button (click)="deleteContact(cnt.id);  " [routerLink]="['/contact']" >Yes</button>
            <button [routerLink]="['/contact',cnt.id]">No</button>
        </div> 
                
    `,
})

export class ContactDeleteComponent implements OnInit 
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

   deleteContact(id)
   {
       this.authHttp.delete(`${this.API_URL}/${id}`)
          .map(res => res.json())
          .subscribe( (res : Contact ) => this.cnt=res);
   }

}
