import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  templateUrl:  'app/components/home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
/*    this.userService.getUser().then((u) => {
      if(!u) this.router.navigate(['/login']);    
    });*/
  }

  public logout(){
    this.userService.logout().then(() => {
      this.router.navigate(['/login']);    
    });
  }
}
