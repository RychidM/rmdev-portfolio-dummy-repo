import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from "@angular/router";
import { CursorTextDirective } from '../../shared/directives/cursor-text-directive/cursor-text.directive';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { ZoomInAnimationDirective } from '../../shared/directives/zoom-in-animation/zoom-in-animation.directive';
import { ParallaxAnimationDirective } from '../../shared/directives/parallax-animation/parallax-animation.directive';
import { PortfolioScrollAnimationDirective } from '../../shared/directives/portfolio-scroll-animation-directive/portfolio-scroll-animation.directive';
import photos from '@constants/photos';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio',
  imports: [RouterModule, RouterOutlet, CommonModule, CursorTextDirective, ZoomInAnimationDirective, ParallaxAnimationDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit{

  photos = photos;

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
      link: '/project:victorian-girls'
    },
    {
      title: 'BluePOS',
      category: 'Finance',
      image: photos.bPosMain,
      link: '/project:bluepos'
    },
    {
      title: 'Bracket Buddy',
      category: 'People',
      video: true,
      poster: photos.bbMain,
      link: '/project/fashion-week'
    },
    // {
    //   title: 'Mystery Forest',
    //   category: 'Nature',
    //   image: 'assets/img/portfolio/portfolio-3.jpg',
    //   link: '/project/mystery-forest'
    // }
  ];
}
