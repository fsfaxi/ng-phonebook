import {Component,Directive} from '@angular/core';
import {ContactService} from './contact.service'; 
import{Contact} from '../contact';
import { OnInit } from '@angular/core';
import {ContactDetailComponent} from './contact-detail.component'


@Component({

    selector:'ct-form',
    templateUrl: './contact-form.component.html',

    

})

export class ContactFormComponent implements OnInit 
{

    ngOnInit(): void 
    {
        
 
    }



}



