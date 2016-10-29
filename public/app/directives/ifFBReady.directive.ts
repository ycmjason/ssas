import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';

import { FacebookService } from '../shared/facebook.service';

@Directive({ selector: '[ifFBReady]' })
export class ifFBReadyDirective implements OnInit {
  constructor(private el: ElementRef,
              private renderer: Renderer,
              private fbService: FacebookService) { }

  ngOnInit(){
    let view = Array.prototype.slice.apply(this.el.nativeElement.children);
    this.renderer.detachView(view);
    let anchor = this.renderer.createTemplateAnchor(this.el.nativeElement);
    this.fbService.onFBReady(() => {
      this.renderer.attachViewAfter(anchor, view);
    });
  }
}
