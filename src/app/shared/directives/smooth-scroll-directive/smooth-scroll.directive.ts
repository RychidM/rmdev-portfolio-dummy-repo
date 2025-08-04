import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { SmoothScrollService } from '../../services/smooth-scroll-service/smooth-scroll.service';


@Directive({
  selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective implements OnInit, OnDestroy {

  constructor(private elementRef: ElementRef, private smoothScrollService: SmoothScrollService) { }
  
  ngOnInit(): void {
    this.smoothScrollService.init(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.smoothScrollService.onDestroy();
  }

}
