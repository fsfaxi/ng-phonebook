import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'auth-callback',

  template:'<h1>Setting up your session and redirecting to the app ...</h1>'
  
})
export class AuthCallbackComponent implements OnInit
{ 

    ngOnInit (){
        // location.reload();
    }
}
