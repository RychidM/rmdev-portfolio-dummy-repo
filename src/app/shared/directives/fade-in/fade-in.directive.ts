import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { GeneralAnimationsService } from '../../services/animations/general-animations.service';
import { SmoothScrollService } from '../../services/smooth-scroll-service/smooth-scroll.service';
import { filter, take } from 'rxjs';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective implements AfterViewInit {

  constructor(private elRef: ElementRef, private animationService: GeneralAnimationsService) { }

  ngAfterViewInit(): void {
        this.animationService.fadeInUpAmimation(this.elRef.nativeElement, this.elRef.nativeElement);
      
  }



}
