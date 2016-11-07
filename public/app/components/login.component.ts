import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector:  'app-root',
  templateUrl:  './app/components/login.component.html'
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
          console.log(u);
          this.router.navigate(['/home']);    
        }else {
          // not logged in
        }
      });
  }

  public login(){
    this.userService.login().then((user) => {
      console.log(user);
      this.router.navigate(['/home']);    
    });
  }
}
