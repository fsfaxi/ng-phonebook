import { Component,OnInit } from '@angular/core';
import {AuthService} from './auth.service';


@Component({
  selector: 'auth-profile',

  templateUrl:'./auth-profile.component.html',
  styleUrls:  ['./auth-profile.component.css'],
  
})
export class AuthProfileComponent implements OnInit
{ 

  profile: any;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log("profile : ", this.profile);
      });
    }
  }
}
