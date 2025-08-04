import { AfterViewInit, Component } from '@angular/core';
import { gsap, Expo } from 'gsap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  imports: [FontAwesomeModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit {
  faChevronDown = faChevronDown;
  faHeartBroken = faHeartBroken;

  ngAfterViewInit(): void {
    // A short delay to make sure the main transition is mostly done.
    gsap.delayedCall(0.8, () => this.animateContent());
  }

  animateContent(): void {
    const tl = gsap.timeline();

    tl.from(".ph-appear", { duration: 1.5, y: 60, autoAlpha: 0, stagger: 0.3, ease: Expo.easeIn, clearProps: "all" }, 0.2);

    gsap.to(".ph-image", {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    })
  }
}
