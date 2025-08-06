import { Directive, ElementRef, HostListener } from '@angular/core';
import { SmoothScrollService } from '../../services/smooth-scroll-service/smooth-scroll.service';

@Directive({
  selector: '[appAnchorScroll]'
})
export class AnchorScrollDirective {

  constructor(private elementRef: ElementRef<HTMLAnchorElement>, private scrollService: SmoothScrollService) { }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const href = this.elementRef.nativeElement.getAttribute('href');

    if (!href || href === '#' || href === '#0') {
      return;
    }

    event.preventDefault();

    let offset = 0;

    const dataOffset = this.elementRef.nativeElement.dataset['offset'];

    if (dataOffset) {
      const parsedOffset = parseInt(dataOffset, 10);
      if (!isNaN(parsedOffset)) {
        offset = parsedOffset;
      }
    } else {
      // 2. If no data-offset, check for a fixed header
      const fixedHeader = document.querySelector<HTMLElement>('#tt-header.tt-header-fixed');
      if (fixedHeader) {
        offset = fixedHeader.offsetHeight;
      }
    }

    this.scrollService.scrollToAnchor(href, offset);
  }

}
