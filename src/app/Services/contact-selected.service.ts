import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import{Contact} from '../contact';

@Injectable()

export class ContactSelectedService 
{
    private ct = new BehaviorSubject<Contact>(null);
    currentCT = this.ct.asObservable();

    constructor(){}

    changeCT(cnt:Contact)
    {
        this.ct.next(cnt);
       
    }

}