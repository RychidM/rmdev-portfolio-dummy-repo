import { ElementRef, Injectable, OnDestroy, Renderer2 } from '@angular/core';
import { gsap, Power2 } from 'gsap';
import { Expo } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class GeneralAnimationsService implements OnDestroy {
  private timeline?: gsap.core.Timeline;

  constructor() { }

  fadeInUpAmimation(element: Element, triggerElement: HTMLElement, scroller: HTMLElement): void {
    const fadeInTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top bottom',
        markers: false,
        scroller: scroller,
      }
    });


    fadeInTimeline.from(element, { duration: 2, opacity: 1, y: 100, ease: Expo.easeInOut, clearProps: 'all' }, "+=0.3");
  }

  stretchInUpAnimation(element: HTMLElement, triggerElement: HTMLElement): void {
    const stretchInTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top bottom',
        markers: false,
        scrub: true,
      },
    });
    stretchInTimeline.from(element, { duration: 2, autoAlpha: 0, y: 100, scaleY: 1.4, ease: Expo.easeOut, clearProps: 'all' }, "+=0.2");
  }

  zoomInOnScrollAnimation(scroller: HTMLElement, elRef: ElementRef) : void {
    
    const animatedEl = elRef.nativeElement;

    // Find the parent wrapper which will act as the trigger
    const triggerEl = animatedEl.closest('.anim-zoomin-wrap');

    if (!triggerEl) {
      console.error("The appZoom in requires a parent with the class anim-zoomin-wrap");
      return;
    }

    // Set overflow hidden on the wrapper
    gsap.set(triggerEl, { overflow: 'hidden'});

    this.timeline = gsap.timeline({
      scrollTrigger: {
        scroller: scroller,
        trigger: triggerEl,
        start: 'top 90%',
        onEnter: () => this.timeline?.scrollTrigger?.refresh(),
      },
    });

    this.timeline.from(animatedEl, { 
      duration: 1.5,
      autoAlpha: 0,
      scale: 1.2,
      ease: Power2.easeInOut,
      clearProps: 'all',
     });
  }


  skewInUpAnimation(element: Element, triggerElement: HTMLElement, scroller: HTMLElement) : void {
    const skewInTimeline = gsap.timeline({});
  }

  ngOnDestroy(): void {
    this.timeline?.kill();
  }

}
