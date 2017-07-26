import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Contact } from '../contact';
import { CONTACTS } from '../mock-contacts';


@Injectable()
export class ContactService {

       getContacts(): Contact[] {
           return CONTACTS;
       }

}