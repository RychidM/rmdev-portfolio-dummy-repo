import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmoothScrollService } from '../../smooth-scroll-service/smooth-scroll.service';
import { filter, take } from 'rxjs';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class HeroSectionAnimationService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private smoothScrollService: SmoothScrollService) { }

  /**
   * Initializes the hero section animations.
   * @param pageHeaderElement Theme main '#page-header' element.
   */
  public initAnimation(pageHeaderElement: HTMLElement): void {
    if (isPlatformBrowser(this.platformId)) {


      this.smoothScrollService.scrollerReady$
      .pipe(filter(scroller => !!scroller), take(1))
      .subscribe(scroller => {

        this.createMainParallaxTimeline(pageHeaderElement, scroller);
        this.animateScrollDownCircle(pageHeaderElement, scroller);
        this.animateMadeWithLove(pageHeaderElement, scroller);
      });

    }
  }
  /**
   * Creates the main parallax timeline for the hero section.
   */
  createMainParallaxTimeline(triggerElement: HTMLElement, scroller: HTMLElement) {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: scroller,
        trigger: triggerElement,
        start: "top top",
        end: "bottom top",
        scrub: true, // This makes animation follow the scroll position
      },
    });

    // Helper function to create animations for parallax elements.
    const addParallax = (selector: string, y: number) => {
      const elem = triggerElement.querySelector(selector);
      if (elem) {
        // Wrap the inner content to apply the transform withour affecting the layout.
        const wrapper = document.createElement('div');
        wrapper.innerHTML = elem.innerHTML;
        elem.innerHTML = '';
        elem.appendChild(wrapper);
        tl.to(wrapper, { y }, 0);
      }
    };

    // Animate caption elements
    addParallax('.rm-caption-title', -40);
    addParallax('.rm-caption-subtitle', -10);
    addParallax('.ph-caption-title-ghost', 40);

    // Animate the main page header image
    const imageInner = triggerElement.querySelector('.ph-image-inner') as HTMLElement;
    if (imageInner) {
      if (triggerElement.classList.contains('ph-image-inner')) {
        tl.to(imageInner, { yPercent: 30, scale: 1.05 }, 0);
      } else {
        tl.to(imageInner, { yPercent: -20 }, 0);
      }
    }
  }


  /**
   * Animates the scroll down circle in the hero section.
   */
  animateScrollDownCircle(triggerElement: HTMLElement, scroller: HTMLElement) {
    const scrollDownCircle = document.querySelector('.scroll-down-circle');
    if (scrollDownCircle) {
      gsap.to(scrollDownCircle, {
        x: -100,
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: {
          scroller: scroller,
          trigger: triggerElement,
          start: 'top top',
          end: '30% top',
          scrub: true,
          markers: false,
        }
      });
    }
  }

  /**
   * Animates the "Made with Love" section in the hero.
   */
  animateMadeWithLove(triggerElement: HTMLElement, scroller: HTMLElement) {
    const madeWithLove = document.querySelector('.mwl-inner');
    if (madeWithLove) {
      gsap.to(madeWithLove,
        {
          autoAlpha: 0,
          yPercent: 250,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerElement,
            scroller: scroller,
            start: 'top top',
            end: '40% top',
            scrub: true,
            markers: false,
          }
        });
    }
  }

}
