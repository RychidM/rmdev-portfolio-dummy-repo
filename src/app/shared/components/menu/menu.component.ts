import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Input() isOpen = true;
  
  menuItems = [
    {
      title: 'Home',
      link: '/',
      children: [
        { title: 'Landing Page v.1', link: '/landing-1' },
        { title: 'Landing Page v.2', link: '/landing-2' }
      ]
    },
    {
      title: 'Portfolio',
      link: '#',
      children: [
        // Submenu items here
      ]
    },
    {
      title: 'Blog',
      link: '#',
      children: [
        // Submenu items here
      ]
    },
    {
      title: 'Contact',
      link: '#',
      children: [
        // Submenu items here
      ]
    }
  ];
}
