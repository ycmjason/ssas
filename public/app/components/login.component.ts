import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FacebookService } from '../shared/facebook.service';

@Component({
  selector:  'app-root',
  templateUrl:  './app/components/login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(
      private router: Router,
      private fbService: FacebookService) { }

  ngOnInit() {
    this.fbService.getUser()
      .then((u) => { // logged in
        console.log(u);
        this.router.navigate(['/home']);    
      }).catch(()=>undefined); // not logged in
  }

  public login(){
    this.fbService.login().then((res) => {
      this.router.navigate(['/home']);    
    });
  }

  public FBReady = this.fbService.FBReady;
}
