import { AfterViewInit, ElementRef, Injectable, OnDestroy } from '@angular/core';
import { SmoothScrollService } from '../../smooth-scroll-service/smooth-scroll.service';
import { filter, take } from 'rxjs';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { GeneralAnimationsService } from '../general-animations.service';


gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class PortfolioSectionAnimationService implements OnDestroy {

  constructor(private generalAnimationService: GeneralAnimationsService) { }
  private triggers: ScrollTrigger[] = [];


  initParallaxAnimation(elRef: ElementRef): void {
    let mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
        const selectors = [
          '.tt-grid.ttgr-layout-creative-1 .tt-grid-item:nth-of-type(6n+2) .ttgr-item-inner',
          '.tt-grid.ttgr-layout-creative-1 .tt-grid-item:nth-of-type(6n+4) .ttgr-item-inner',
          '.tt-grid.ttgr-layout-creative-2 .tt-grid-item:nth-of-type(4n+2) .ttgr-item-inner',
          '.tt-grid.ttgr-layout-creative-2 .tt-grid-item:nth-of-type(4n+3) .ttgr-item-inner'
        ];

        const hostElement = elRef.nativeElement;
        const itemsToAnimate = hostElement.querySelectorAll(selectors.join(', '));

        itemsToAnimate.forEach((item: HTMLElement) => {
          const st = gsap.to(item, {
            yPercent: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });

          this.triggers.forEach(st => st.kill());
        });
      })
      
  }

  animatePorfolioHeader(element: Element, triggerElement: HTMLElement) {
    this.generalAnimationService.fadeInUpAmimation(element, triggerElement);
  }

  ngOnDestroy(): void {
    this.triggers.forEach(st => st.kill());
  }
}
