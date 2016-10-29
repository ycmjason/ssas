import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FacebookService } from '../shared/facebook.service';

@Component({
  selector:  'app-root',
  templateUrl:  './app/components/home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
      private router: Router,
      private fbService: FacebookService) { }

  ngOnInit() {
    this.fbService.getUser()
      .then(() => {})
      .catch(() => { // not yet logged in
        this.router.navigate(['/login']);    
      });
  }

  public logout(){
    this.fbService.logout().then(() => {
      this.router.navigate(['/login']);    
    });
  }
}
