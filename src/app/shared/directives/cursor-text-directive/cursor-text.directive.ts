import { Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';
import { MagicCursorService } from '../../services/magic-cursor-service/magic-cursor.service';

@Directive({
  selector: '[appCursorText]'
})
export class CursorTextDirective implements OnDestroy{

  @Input('appCursorText') text: string = '';

  constructor(private cursor: MagicCursorService, private elementRef: ElementRef) {}

  @HostListener('mouseenter') onEnter() {
    this.cursor.showText(this.text);
    this.elementRef.nativeElement.style.cursor = 'none';
  }

  @HostListener('mouseleave') onLeave() {
    this.cursor.reset();
  }

  ngOnDestroy(): void {
    this.cursor.reset();
  }
}
