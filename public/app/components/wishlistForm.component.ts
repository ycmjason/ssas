import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector:  'app-root',
  templateUrl:  './app/components/home.component.html'
})
export class WishlistForm {
  constructor(private router: Router,
              private userService: UserService) { }
}
