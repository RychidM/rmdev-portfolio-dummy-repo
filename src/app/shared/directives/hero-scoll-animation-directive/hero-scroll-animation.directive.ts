import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { HeroSectionAnimationService } from '../../services/animations/hero-section-animation-service/hero-section-animation.service';

@Directive({
  selector: '[appHeroScrollAnimation]'
})
export class HeroScrollAnimationDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef, private animationService: HeroSectionAnimationService) { }

  ngAfterViewInit(): void {
    const pageHeader = this.elementRef.nativeElement.querySelector('#page-header');

    if (pageHeader && pageHeader.classList.contains('ph-content-parallax')) {
      setTimeout(() => {
        this.animationService.initAnimation(pageHeader);
      });
    }

  }

}
