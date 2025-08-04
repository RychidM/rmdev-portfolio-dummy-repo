import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { gsap } from 'gsap';
import { Expo } from 'gsap/all';
import { TransitionService } from '../../services/transition-service/transition.service';
import photos from '@constants/photos';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-page-transition',
  standalone: true,
  imports: [],
  templateUrl: './page-transition.component.html',
  styleUrl: './page-transition.component.scss'
})
export class PageTransitionComponent implements OnInit, AfterViewInit, OnDestroy{
  @ViewChild('pageTransition') pageTransition!: ElementRef;
  @ViewChild('ptrOverlay') ptrOverlay!: ElementRef;
  @ViewChild('ptrPreloader') ptrPreloader!: ElementRef;
  @ViewChild(('ptrLogo')) ptrLogo!: ElementRef;

  rmLogoWhite = photos.rmLogoTransparent;

  private subscription!: Subscription;

  constructor(private transitionService: TransitionService) { }
  

  ngOnInit(): void {
    // Subscribe to the loading state from the service

    this.subscription = this.transitionService.isLoading.subscribe(isLoading => {
      if (isLoading) {
        this.revealLoad();
      } else {
        // The HideLoad is called in ngAfterViewInit for the first load, 
        // so we can check if the component is initialized.
        if (this.pageTransition) {
          this.hideLoad();

        }
      }
    });
  }

  ngAfterViewInit(): void {
    // Initial animation when the app first loads
    gsap.delayedCall(0.5, () => this.hideLoad());
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks (AKA clean up step)
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  revealLoad(): void {
    // Guard against this method being called before the view is initialized.
    // @ViewChild properties are only available after the `ngAfterViewInit` lifecycle hook.
    if (!this.pageTransition || !this.ptrOverlay || !this.ptrPreloader || !this.ptrLogo) {
      return;
    }
    const tl_transition = gsap.timeline({ defaults: {duration: 1, ease: Expo.easeIn} });
    tl_transition.set(this.pageTransition.nativeElement, {autoAlpha: 1});
    tl_transition.to(this.ptrOverlay.nativeElement, {scaleY: 1, transformOrigin: "center bottom" }, 0);

    // Note: Animating #content-wrap is handled differently in Angular.
    tl_transition.to(this.ptrPreloader.nativeElement, {autoAlpha: 1}, 0.4);
  }

  hideLoad(): void {
    // Guard against this method being called before the view is initialized.
    if (!this.pageTransition || !this.ptrOverlay || !this.ptrPreloader || !this.ptrLogo) {
      return;
    }
    const tl_transition = gsap.timeline();
    tl_transition.to(this.ptrLogo.nativeElement, {duration: 1, opacity: 0, ease: Expo.easeIn}, 0.3);
    tl_transition.to(this.ptrPreloader.nativeElement, { duration: 1, autoAlpha: 0, ease: Expo.easeIn }, 0.3);
    tl_transition.to(this.ptrOverlay.nativeElement, { duration: 1, scaleY: 0, transformOrigin: "center top", ease: Expo.easeIn}, 0.3);

    // // Hides the whole transition container after the animation is done.
    tl_transition.set(this.pageTransition.nativeElement, {autoAlpha: 1});
  }
}
