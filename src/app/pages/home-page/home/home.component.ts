import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { gsap } from 'gsap';
import { Expo } from 'gsap/all';
import { RouterModule, RouterOutlet } from "@angular/router";
import { SmoothScrollDirective } from '../../../shared/directives/smooth-scroll-directive/smooth-scroll.directive';
import { HeroScrollAnimationDirective } from '../../../shared/directives/hero-scoll-animation-directive/hero-scroll-animation.directive';
import { FooterComponent } from "../../../components/footer/footer.component";
import { HeroComponent } from '../components/hero/hero.component';
import { ProfessionalExperienceComponent } from '../components/professional-experience/professional-experience.component';
import { PortfolioComponent } from '../components/portfolio/portfolio.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    RouterOutlet, 
    RouterModule, 
    HeroComponent, 
    PortfolioComponent, 
    SmoothScrollDirective, 
    HeroScrollAnimationDirective, 
    ProfessionalExperienceComponent, 
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngAfterViewInit(): void {
    // A short delay to make sure the main transition is mostly done.
    gsap.delayedCall(0.8, () => this.animateContent());
  }

  animateContent(): void {

    const tl = gsap.timeline();

    tl.from("#tt-header", { duration: 1, y: 20, autoAlpha: 0, ease: Expo.easeIn });
    // tl.from(".ph-appear", { duration: 1.5, y: 60, autoAlpha: 0, stagger: 0.3, ease: Expo.easeIn, clearProps: "all" }, 0.2);
    tl.from("#page-content", { duration: 1.5, autoAlpha: 0, y: 80, ease: Expo.easeInOut, clearProps: "all" }, 0);

  }
}
