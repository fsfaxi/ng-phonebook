import { Component,OnInit } from '@angular/core';


import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import 'rxjs/add/operator/map';


import {Contact} from '../contact';

@Component({
  selector: 'app-ping',
  template: `     
        
    <h2>Ping Test</h2>
    <div *ngIf="cts" >
        <table>
            <tr><td>Name :   </td>  <td>{{cts[1].name}}</td></tr>
            <tr><td>Address :</td>  <td>{{cts[1].address}}</td></tr>
            <tr><td>Email:   </td>  <td>{{cts[1].email}}</td></tr>
            <tr><td>Phone :  </td>  <td>{{cts[1].phone}}</td></tr>
        </table>
   </div>    
  `,
  
  
 
})

export class PingComponent implements OnInit 
{

  API_URL: string = 'http://localhost:50194/api/contact';
  ct : Contact = new Contact (null,null,null,null,null);
  cts : Contact [];

  constructor(public authHttp: AuthHttp) {}

    ngOnInit(): void 
    {
        //this.securedPing(); 
        this.testPing();
    }

  public securedPing(): void {
    this.authHttp.get(`${this.API_URL}`)
      .map(res => res.json())
      .subscribe( data => 
            {
                this.ct.name = data.name;
                this.ct.address=data.address;
                this.ct.email=data.email;
                this.ct.phone=data.phone_number;
            }
    
       
     );
  }

  public testPing(): Contact [] 
  {
    this.authHttp.get(`${this.API_URL}`)
        .map(res => res.json())
        .subscribe( (res : Contact[] ) => this.cts=res.slice(0));
        return this.cts;
  }




}