import { Injectable } from '@angular/core';

import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import 'rxjs/add/operator/map';

import { Contact } from '../contact';



@Injectable()
export class ContactApiService {

       API_URL: string = 'http://localhost:50194/api/contact';
       cts : Contact [];

       constructor(public authHttp: AuthHttp) {}

       getContacts(): Promise<Contact[]> {
           return Promise.resolve(this.cts);
       }

       getContactsApi ()
       {
        this.authHttp.get(`${this.API_URL}`)
          .map(res => res.json())
          .subscribe( (res : Contact[] ) => this.cts=res.slice(0));

       }



    //    getContact(id: number): Promise<Contact> {
    //         return this.getContacts()
    //                     .then(ct => ct.find(ct => ct.id === id));
    //     }

}