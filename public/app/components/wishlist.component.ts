import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WishlistService } from '../shared/wishlist.service';

@Component({
  selector: 'ssas-wishlist',
  templateUrl:  'app/components/wishlist.component.html',
  styles: [`ol{
    margin: 0;
    }`],
})
export class WishlistComponent implements OnInit {
  @Input() user;
  @Input() title;
  @Input() subtitle;
  public wishes;

  constructor(private router: Router,
              private wishlistService: WishlistService) { }

  ngOnInit() {
    this.title = this.title || `What ${this.user.name} doesn't want`;
    this.wishlistService.getWishlist(this.user._id).then(wishes => {
      this.wishes = wishes;
    });
  }
}
