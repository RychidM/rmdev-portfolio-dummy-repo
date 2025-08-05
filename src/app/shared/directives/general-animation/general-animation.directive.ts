import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { GeneralAnimationsService } from '../../services/animations/general-animations.service';

@Directive({
  selector: '[appGeneralAnimation]'
})
export class GeneralAnimationDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef, private animationService: GeneralAnimationsService) { }

  ngAfterViewInit(): void {

    setInterval(() => {
      // this.animationService.fadeInUpAmimation(this.elementRef.nativeElement);
    }, 0);
  }




}
