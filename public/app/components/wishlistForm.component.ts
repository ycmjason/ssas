import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { WishlistService } from '../shared/wishlist.service';

@Component({
  selector: 'ssas-wishlist-form',
  templateUrl:  'app/components/wishlistForm.component.html',
  styles: [`
  md-input{
    width: 100%;
  }`],
})
export class WishlistFormComponent {
  @Output() wishesMade = new EventEmitter();
  public wishes = [];
  public message;

  private _eg_items = [
    'red stuff',
    'alcohol',
    'scented candles',
    'socks',
    'books',
  ];

  public examples = 'Examples: ' + this._eg_items.map(i => `<i>${i}</i>`).join(', ');

  private _badSubmission(){
    this.message = "Please make sure you fill all three things that you don't want.";
  }

  constructor(private router: Router,
              private wishlistService: WishlistService) { }

  public submit() {
    let wishes = this.wishes.map(w => w.trim());
    if(wishes.filter(w => !!w).length !== 3) return this._badSubmission();
    
    this.wishlistService.createWishlist(wishes).then((wishes) => this.wishesMade.emit(wishes));
  }
}
