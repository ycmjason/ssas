import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  templateUrl:  'app/components/login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(
      private router: Router,
      private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser()
      .then((u) => {
        if(u) {
          // logged in
          this._loginSuccessful(u);
        }else {
          // not logged in
        }
      });
  }

  private _loginSuccessful(user) {
    console.log(user); 
    this.router.navigate(['/home']);
  }

  public login(){
    this.userService.login().then(this._loginSuccessful.bind(this));
  }
}
