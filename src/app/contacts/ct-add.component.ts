import {Component,Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {ContactService} from './contact.service'; 

import{Contact} from '../contact';
import { OnInit } from '@angular/core';


import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


@Component({

    selector:'ct-addd',
    template: '<h1>add contact</h1>',

    

})

export class CtAddComponent implements OnInit 
{

    ct : Contact; 
    
    constructor( 
        private contactService : ContactService,
        private route: ActivatedRoute,
        private location: Location

    ){}

    ngOnInit(): void 
    {
        
 
    }

    addContact(ctn,cte,cta,ctp)
    {
        let cc = new Contact(18,ctn,cte,cta,ctp);
        this.contactService.addContact(cc);
    }






}

