import {Component,OnInit,Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {ContactService} from './contact.service'; 
import{Contact} from '../contact';
import {ContactListComponent} from './contact-list.component'; 

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
    selector:'ct-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: [ './contact-detail.component.css' ],
 

})

export class ContactDetailComponent implements OnInit 
{

   cnt_details : Contact;
   cnt_edit : Contact;
   p_name : String;

   constructor(
       
        private cts : ContactService,
        private route: ActivatedRoute,
        private location: Location
                
       ){}

   ngOnInit()
   {

          

          if (typeof this.route.snapshot.data['name'] != "undefined")
          {
            this.p_name =  this.route.snapshot.data['name'];
            if(this.p_name == "detail")
            {
                 this.displayPathName();
                 this.cnt_edit=null;
                 this.route.paramMap
                     .switchMap((params: ParamMap) => this.cts.getContact(+params.get('id')))
                     .subscribe(contact => this.cnt_details = contact);

            }else if (this.p_name == "edit")
            {
                this.displayPathName();
                this.cnt_details=null;
                this.route.paramMap
                    .switchMap((params: ParamMap) => this.cts.getContact(+params.get('id')))
                    .subscribe(contact => this.cnt_edit = contact);
            }


          }
    
   }

   runRoute (ct : Contact)
   {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.cts.getContact(+params.get('id')))
            .subscribe(contact => ct = contact);
   }

   displayPathName ()
   {
       if(typeof this.route.snapshot.data['name'] == "undefined")
        console.log("It is undefined !!");
       else
         console.log(this.route.snapshot.data['name']);

   }

   updateContact(id,ctn,cte,cta,ctp)
   {
        let cc = new Contact(id,ctn,cte,cta,ctp);
        this.cts.updateContact(cc,id);
   }


}
