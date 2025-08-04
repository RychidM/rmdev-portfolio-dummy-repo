import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { MagicCursorService } from '../../services/magic-cursor-service/magic-cursor.service';

@Directive({
  selector: '[appAnimateText]'
})
export class AnimateTextDirective implements OnInit{

  @Input('targetText') targetText: string = '';
  private originalText: string = '';

  constructor(private elRef: ElementRef, private cursorService: MagicCursorService) { }

  ngOnInit(): void {
    this.originalText = this.elRef.nativeElement.innerText;
  }

  @HostListener('mouseenter') onEnter() {
    this.cursorService.animateText(this.elRef.nativeElement, this.targetText);
  }

  @HostListener('mouseleave') onLeave() {
    this.cursorService.animateText(this.elRef.nativeElement, this.originalText);
  }

}
