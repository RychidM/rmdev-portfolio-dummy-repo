import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faTwitter, faBehance, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { MagneticItemDirective } from '../../shared/directives/magnetic-item-directive/magnetic-item.directive';
import { SmoothScrollService } from '../../shared/services/smooth-scroll-service/smooth-scroll.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FaIconComponent, FontAwesomeModule, MagneticItemDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private scroller: SmoothScrollService) {}

 socials = [
  {
    link: "https://www.linkedin.com/in/richard-oppong-826298215/",
    icon: faLinkedinIn,
  },
  {
    link: "https://github.com/RychidM",
    icon: faGithub,
  },
  {
    link: "https://www.behance.net/Platinumimagery",
    icon: faBehance,
  },
  {
    link: "#",
    icon: faTwitter
  },
  {
    link: "#",
    icon: faInstagram,
  }
 ];

 scrollToTop() {
  this.scroller.scrollToTop();
 }


}
