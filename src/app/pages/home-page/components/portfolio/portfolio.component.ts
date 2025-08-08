import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import photos from '@constants/photos';
import { FadeInDirective } from '../../../../shared/directives/fade-in/fade-in.directive';
import { CursorTextDirective } from '../../../../shared/directives/cursor-text-directive/cursor-text.directive';
import { ZoomInAnimationDirective } from '../../../../shared/directives/zoom-in-animation/zoom-in-animation.directive';
import { ParallaxAnimationDirective } from '../../../../shared/directives/parallax-animation/parallax-animation.directive';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio',
  imports: [
    RouterModule, 
    CommonModule, 
    FadeInDirective, 
    CursorTextDirective, 
    ZoomInAnimationDirective, 
    ParallaxAnimationDirective
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit{

  photos = photos;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      // ScrollTrigger.refresh();
    }, 0);
  }
  portfolioItems = [
    {
      title: 'Blue Palette',
      category: 'E-Commerce',
      image: photos.bpMain,
      link: '/project-details/blue-palette'
    },
    {
      title: 'BluePOS',
      category: 'Finance',
      image: photos.bPosMain,
      link: '/project-details/bluepos'
    },
    {
      title: 'Bracket Buddy',
      category: 'People',
      video: true,
      poster: photos.bbMain,
      link: '/project-details/bracket-buddy'
    },
    // {
    //   title: 'Mystery Forest',
    //   category: 'Nature',
    //   image: 'assets/img/portfolio/portfolio-3.jpg',
    //   link: '/project/mystery-forest'
    // }
  ];

  navigateToProject(link: string): void {
    this.router.navigate([link]);
  }
}
