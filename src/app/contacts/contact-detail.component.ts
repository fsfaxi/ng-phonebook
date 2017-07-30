import {Component,OnInit,Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {ContactService} from './contact.service'; 
import{Contact} from '../contact';


import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'ct-detail',
    templateUrl: './contact-detail.component.html',
})

export class ContactDetailComponent implements OnInit 
{

   cnt_details : Contact;

   constructor(
       
        private cts : ContactService,
        private route: ActivatedRoute,
             
   ){}

   ngOnInit()
   {         
        this.route.paramMap
            .switchMap((params: ParamMap) => this.cts.getContact(+params.get('id')))
            .subscribe(contact => this.cnt_details = contact);
   }



//    displayPathName ()
//    {
//        if(typeof this.route.snapshot.data['name'] == "undefined")
//         console.log("It is undefined !!");
//        else
//          console.log(this.route.snapshot.data['name']);

//    }

//    updateContact(id,ctn,cte,cta,ctp)
//    {
//         let cc = new Contact(id,ctn,cte,cta,ctp);
//         this.cts.updateContact(cc,id);
//    }

//    deleteContact(id)
//    {
//        this.cts.deleteContact(id);
//    }


}
