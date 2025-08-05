import { AfterViewInit, ElementRef, Inject, Injectable, OnDestroy, PLATFORM_ID } from '@angular/core';
import { SmoothScrollService } from '../../smooth-scroll-service/smooth-scroll.service';
import { filter, take } from 'rxjs';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { GeneralAnimationsService } from '../general-animations.service';


gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class PortfolioSectionAnimationService implements AfterViewInit, OnDestroy {

  constructor(private smoothScrollService: SmoothScrollService, private generalAnimationService: GeneralAnimationsService) { }
  scroller?: HTMLElement | null;
  private triggers: ScrollTrigger[] = [];

  ngAfterViewInit(): void {
    this.smoothScrollService.scrollerReady$
      .pipe(filter(scroller => !!scroller), take(1))
      .subscribe(scroller => {
        this.scroller = scroller;
      });
  }


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
              scroller: this.scroller,
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
    this.generalAnimationService.fadeInUpAmimation(element, triggerElement, this.scroller!);
  }

  ngOnDestroy(): void {
    this.triggers.forEach(st => st.kill());
  }
}
