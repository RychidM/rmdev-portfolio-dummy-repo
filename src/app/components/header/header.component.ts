import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../../shared/components/menu/menu.component";
import { AnimateTextDirective } from '../../shared/directives/animate-text-directive/animate-text.directive';
import { MagneticItemDirective } from "../../shared/directives/magnetic-item-directive/magnetic-item.directive";
import goldLogo  from '@constants/photos';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MenuComponent, MagneticItemDirective, AnimateTextDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  goldLogo = goldLogo;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

}
