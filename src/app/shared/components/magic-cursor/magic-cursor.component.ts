import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { MagicCursorService } from '../../services/magic-cursor-service/magic-cursor.service';

@Component({
  selector: 'app-magic-cursor',
  imports: [],
  templateUrl: './magic-cursor.component.html',
  styleUrl: './magic-cursor.component.scss'
})
export class MagicCursorComponent implements AfterViewInit {

  constructor(private elRef: ElementRef, private cursorService: MagicCursorService) {}

  ngAfterViewInit(): void {
    const ball = this.elRef.nativeElement.querySelector('#ball');
    this.cursorService.init(ball);
  }

}
