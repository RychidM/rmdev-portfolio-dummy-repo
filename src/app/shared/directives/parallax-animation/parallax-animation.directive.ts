import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { PortfolioSectionAnimationService } from '../../services/animations/portfolio-section-animations-service/portfolio-section-animation.service';

@Directive({
  selector: '[appParallaxAnimation]'
})
export class ParallaxAnimationDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef, private animationService: PortfolioSectionAnimationService) { }

  ngAfterViewInit(): void {
    this.animationService.initParallaxAnimation(this.elementRef);
  }

}
