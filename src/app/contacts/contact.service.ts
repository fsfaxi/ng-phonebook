import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Contact } from '../contact';
import { CONTACTS } from '../mock-contacts';


@Injectable()
export class ContactService {

       getContacts(): Promise<Contact[]> {
           return Promise.resolve(CONTACTS);
       }

       getContact(id: number): Promise<Contact> {
            return this.getContacts()
                        .then(ct => ct.find(ct => ct.id === id));
        }

        addContact(ct : Contact) 
        {
            this.getContacts().then(cts => cts.push(ct));
        }

        updateContact(ct : Contact,id)
        {
            console.log("updating contact");
            this.getContact(id).then(cts => cts=ct);
        }

}