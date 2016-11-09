import { Component, Input } from '@angular/core';

import { WishlistService } from '../shared/wishlist.service';

@Component({
  selector: 'ssas-profile',
  templateUrl:  'app/components/profile.component.html',
  styles: [`img{
        border-radius: 100px 0;
    }`];
})
export class ProfileComponent {
  @Input() user;
  @Input() subtitle;

  constructor(public wishlistService: WishlistService) { }
}
