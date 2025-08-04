import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { gsap } from 'gsap';
import { MagicCursorService } from '../../services/magic-cursor-service/magic-cursor.service';

@Directive({
  selector: '[appMagneticItem]'
})
export class MagneticItemDirective {

  constructor(private elRef: ElementRef, private cursorService: MagicCursorService) { }

  @Input() scale: number = 2.5;

  @HostListener('mouseenter') onEnter() {
    this.cursorService.scaleBall(this.scale);
    // change mouse cursor to pointer
    this.elRef.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onLeave() {
    this.cursorService.resetBall();
    gsap.to(this.elRef.nativeElement, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });

  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const rect = this.elRef.nativeElement.getBoundingClientRect();

    const relX = event.clientX - rect.left;
    const relY = event.clientY - rect.top;

    const movement : number = 35;

    const moveX = ((relX - rect.width / 2) / rect.width) * movement;
    const moveY = ((relY - rect.height / 2) / rect.height) * movement;

    gsap.to(this.elRef.nativeElement, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: 'power2.out'
    });

    this.cursorService.scaleBall(this.scale);
  }

}
