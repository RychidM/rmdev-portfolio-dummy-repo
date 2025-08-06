import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MagicCursorService } from '../../services/magic-cursor-service/magic-cursor.service';

@Directive({
  selector: '[appCursorText]'
})
export class CursorTextDirective {

  @Input('appCursorText') text: string = '';

  constructor(private cursor: MagicCursorService, private elementRef: ElementRef) {}

  @HostListener('mouseenter') onEnter() {
    this.cursor.showText(this.text);
    this.elementRef.nativeElement.style.cursor = 'none';
  }

  @HostListener('mouseleave') onLeave() {
    this.cursor.reset();
  }

}
