import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { gsap, Power1 } from 'gsap';

@Directive({
  selector: '[appAccordion]'
})
export class AccordionDirective implements OnInit, OnChanges {

  @Input('appAccordion') isOpen: boolean = false;

  private contentElement: HTMLElement | null = null;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.contentElement = this.elementRef.nativeElement.querySelector('.tt-accordion-content');

    if (this.contentElement) {
      if (this.isOpen) {
        gsap.set(this.contentElement, { height: 'auto', autoAlpha: 1 });
      } else {
        gsap.set(this.contentElement, { height: 0, autoAlpha: 0 });
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && this.contentElement) {
      this.toggle();
    }
  }

  private toggle() : void {
    if (!this.contentElement) return;

    if (this.isOpen) {
      gsap.to(this.contentElement, { duration: 0.35, height: 'auto', autoAlpha: 1, ease: Power1.easeInOut });
    } else {
      gsap.to(this.contentElement, { duration: 0.35, height: 0, autoAlpha: 0, ease: Power1.easeInOut });
    }
  }

}
