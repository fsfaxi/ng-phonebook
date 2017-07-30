import {Component,OnInit,Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {ContactService} from './contact.service'; 
import{Contact} from '../contact';


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

   constructor(
       
        private cts : ContactService,
        private route: ActivatedRoute,
             
   ){}

   ngOnInit()
   {         
        this.route.paramMap
            .switchMap((params: ParamMap) => this.cts.getContact(+params.get('id')))
            .subscribe(contact => this.cnt = contact);
   }

   deleteContact(id)
   {
       this.cts.deleteContact(id);
   }

}
