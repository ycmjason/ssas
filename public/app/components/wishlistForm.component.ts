import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';

@Component({
  selector: 'ssas-wishlist-form',
  templateUrl:  'app/components/wishlistForm.component.html',
  styles: [`
  md-input{
    width: 100%;
  }`],
})
export class WishlistFormComponent {
  public wishlist = [];

  private _eg_items = [
    'something red!',
    'no books at all please!',
    'alcohol related stuff!',
    'scented candles',
    'shocks',
  ].map(i=> 'I wish to have ' + i);

  public examples = 'Examples: ' + this._eg_items.map(i => `<i>${i}</i>`).join(', ');

  constructor(private router: Router,
              private userService: UserService) { }
}
