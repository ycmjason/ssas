import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../shared/user.service';
import { WishlistService } from '../shared/wishlist.service';

@Component({
  templateUrl:  'app/components/home.component.html',
  styles: [`.center{
    text-align: center
    }
    section{
      margin: 1em;
    }`],
})
export class HomeComponent implements OnInit {
  public user;
  public wishes;
  public master;

  constructor(private router: Router,
              private userService: UserService,
              private wishlistService: WishlistService) { }

  ngOnInit() {
    this.userService.getUser().then((u) => {
      if(!u) return this.router.navigate(['/login']);    
      this.user = u;
      this.wishlistService.getWishlist(u._id).then(wishes => {
        this.wishes = wishes;
      });
    });
    this.userService.getAllocation().then(to => {
      if(!to) return;
      this.master = to;
    });
  }

  public logout(){
    this.userService.logout().then(() => {
      this.router.navigate(['/login']);    
    });
  }
}
