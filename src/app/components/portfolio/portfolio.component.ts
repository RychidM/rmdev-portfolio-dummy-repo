import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from "@angular/router";
import { CursorTextDirective } from '../../shared/directives/cursor-text-directive/cursor-text.directive';

@Component({
  selector: 'app-portfolio',
  imports: [RouterModule, RouterOutlet, CommonModule, CursorTextDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioItems = [
    {
      title: 'Victorian Girls',
      category: 'People',
      image: 'assets/img/portfolio/portfolio-1.jpg',
      link: '/project/victorian-girls'
    },
    {
      title: 'Smithy',
      category: 'Creative',
      image: 'assets/img/portfolio/portfolio-2.jpg',
      link: '/project/smithy'
    },
    {
      title: 'Fashion Week',
      category: 'People',
      video: true,
      poster: 'assets/vids/fashion-week.jpg',
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
