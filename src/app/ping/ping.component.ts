import { Component,OnInit } from '@angular/core';


import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import 'rxjs/add/operator/map';

import {Contact} from '../contact';

@Component({
  selector: 'app-ping',
  template: `     
        
    <h2>Ping Test</h2>
    <div *ngIf="ct" >
        <table>
            <tr><td>Name :   </td>  <td>{{ct.name}}</td></tr>
            <tr><td>Address :</td>  <td>{{ct.address}}</td></tr>
            <tr><td>Email:   </td>  <td>{{ct.email}}</td></tr>
            <tr><td>Phone :  </td>  <td>{{ct.phone}}</td></tr>
        </table>
    {{ct.name}}</div>    
  `,
  
  
 
})

export class PingComponent implements OnInit 
{

  API_URL: string = 'http://localhost:50194/api/contact/1';
  ct : Contact = new Contact (null,null,null,null,null);

  constructor(public authHttp: AuthHttp) {}

    ngOnInit(): void 
    {
        this.securedPing(); 
 
    }

  public securedPing(): void {
    this.authHttp.get(`${this.API_URL}`)
      .map(res => res.json())
      .subscribe( data => 
            {
                this.ct.name = data.name;
                this.ct.address=data.address;
                this.ct.email=data.email;
                this.ct.phone=data.phone;
            }
    
       
     );
  }
}