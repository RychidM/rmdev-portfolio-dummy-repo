import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Scrollbar from 'smooth-scrollbar';
import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { BehaviorSubject } from 'rxjs';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {

  // Holds the instance of the scrollbar
  private scrollbar: Scrollbar | null = null;
  private scrollerElement: HTMLElement | null = null;

  private scrollerReady = new BehaviorSubject<HTMLElement | null>(null);
  public scrollerReady$ = this.scrollerReady.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  /**
   * Initializes the smooth scrollbar on a given HTML element.
   * @param element The HTML element to apply the smooth scrollbar to.
   */
  init(element: HTMLElement): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollerElement = element;
      this.scrollbar = Scrollbar.init(element, {
        damping: 0.06, // Adjust the damping for smoother scrolling
        renderByPixels: true, // Render scrolling by pixels
        continuousScrolling: true // Enable continuous scrolling
      });

      // Set up the proxy for GSAP's ScrollTrigger
      this.setupScrollTriggerProxy(element);

      this.scrollerReady.next(this.scrollerElement);
    }
  }

  /**
   * Connects GSAP's ScrollTrigger to our custom smooth scrollbar.
   * This lets ScrollTrigger know how to get/set the scroll position
   * of our custom scrollbar instead of the default browser scroll.
   * @param scrollerElement The element that acts as the scroller.
   */
  private setupScrollTriggerProxy(scrollerElement: HTMLElement): void {
    if (this.scrollbar) {
      ScrollTrigger.scrollerProxy(scrollerElement, {
        scrollTop: (value) => {
          if (arguments.length && this.scrollbar) {
            this.scrollbar.scrollTop = value as number;
          }
          return this.scrollbar ? this.scrollbar.scrollTop : 0;
        },

        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
      });
      
      // Every time the smooth scrollbar updates, we must tell ScrollTrigger to update as well.
      // This keeps all animations in sync with the scroll position.
      this.scrollbar.addListener(ScrollTrigger.update);

      // We need to set the scoller for ScrollTrigger instances.
      ScrollTrigger.defaults({ scroller: scrollerElement });
    }
  }

  /**
   * Returns the main scoller element.
   * @returns The HTML element that is used for smooth scrolling.
   */  
  public getScroller() : HTMLElement | null {
    return this.scrollerElement;
  }

  /**
   * Smoothly scrolls the page to the top.
   * If the smooth scrollbar is active, it uses GSAP for animation.
   * Otherwise, it falls back to the native browser's smooth scroll behavior.
   */
  public scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    // Check if the smooth scrollbar instance exists
    if (this.scrollbar) {
      // Use GSAP to animate the scrollbar's scrollTop property
      gsap.to(this.scrollbar, {
        duration: 1.5,
        scrollTop: 0,
        ease: 'expo.inOut' // Corresponds to Expo.easeInOut
      });
    } else {
      // Fallback for native scrolling on mobile or when smooth scroll is disabled
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

    onDestroy(): void {
      if (this.scrollbar) {
        this.scrollbar.destroy();
        this.scrollbar = null;
      }
  }
}
