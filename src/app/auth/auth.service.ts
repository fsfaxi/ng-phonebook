import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  requestedScopes: string = 'openid profile read:contacts';

  auth0 = new auth0.WebAuth({
    clientID: 'FfsRXRO27e93O1YsngPGsmXS7cbdioUd',
    domain: 'ngphonebook.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'http://localhost:50194/api/contact',
    redirectUri: 'http://localhost:4200/callback',      
    scope: this.requestedScopes
  });

  userProfile: any;

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
    console.log(this.auth0.scope);
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/']);
      } else if (err) {
        this.router.navigate(['/']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {

    const scopes = authResult.scope || this.requestedScopes || '';
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));

    

  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
    location.reload();
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    throw new Error('Access token must exist to fetch profile');
  }

  const self = this;
  this.auth0.client.userInfo(accessToken, (err, profile) => {
    if (profile) {
      self.userProfile = profile;
    }
    cb(err, profile);
  });
}

public userHasScopes(scopes: Array<string>): boolean {
  const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
  return scopes.every(scope => grantedScopes.includes(scope));
}


}