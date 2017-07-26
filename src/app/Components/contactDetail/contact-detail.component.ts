import {Component,OnInit,Input} from '@angular/core';


import {ContactService} from '../../Services/contact.service'; 
import{Contact} from '../../contact';
import {PbListComponent} from '../pb-list/pb-list.component'; 
import {ContactSelectedService} from '../../Services/contact-selected.service';

@Component({
    selector:'ct-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: [ './contact-detail.component.css' ],
 

})

export class ContactDetailComponent implements OnInit 
{

   cnt : Contact;
   
   constructor(private cts : ContactSelectedService){}

   ngOnInit()
   {
       this.cts.currentCT.subscribe(ct => this.cnt = ct);
   }
}
