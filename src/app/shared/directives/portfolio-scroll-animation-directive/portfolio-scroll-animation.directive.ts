import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { PortfolioSectionAnimationService } from '../../services/animations/portfolio-section-animations-service/portfolio-section-animation.service';
import { SmoothScrollService } from '../../services/smooth-scroll-service/smooth-scroll.service';

@Directive({
  selector: '[appPortfolioScrollAnimation]'
})
export class PortfolioScrollAnimationDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef, private porfolioAnimationService: PortfolioSectionAnimationService, private scrollService: SmoothScrollService) { }

  ngAfterViewInit(): void {
    const ttSection = this.elementRef.nativeElement.querySelector('.tt-section');
      
      const element = document.querySelector('.tt-heading');
      this.porfolioAnimationService.animatePorfolioHeader(element!, ttSection);
  }

}
