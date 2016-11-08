import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'ssas-wishlist',
  templateUrl:  'app/components/wishlist.component.html',
})
export class WishlistComponent {
  public wishlist = [
    'something red!',
    'scented candles',
    'shocks',
  ].map(i=> 'I wish to have ' + i);

  constructor(private router: Router,
              private userService: UserService) { }
}
