import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { GeneralAnimationsService } from '../../services/animations/general-animations.service';
import { SmoothScrollService } from '../../services/smooth-scroll-service/smooth-scroll.service';
import { filter, take } from 'rxjs';

@Directive({
  selector: '[appZoomInAnimation]'
})
export class ZoomInAnimationDirective implements AfterViewInit {

  constructor(private elRef: ElementRef, private animationService: GeneralAnimationsService, private scrollService: SmoothScrollService) { }

  ngAfterViewInit(): void {

    this.scrollService.scrollerReady$
      .pipe(filter(scroller => !!scroller), take(1))
      .subscribe(scroller => {
        this.animationService.zoomInOnScrollAnimation(scroller, this.elRef);
      })
  }

}
