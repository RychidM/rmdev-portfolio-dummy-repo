import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageTransitionComponent } from "./shared/components/page-transition/page-transition.component";
import { MagicCursorComponent } from "./shared/components/magic-cursor/magic-cursor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageTransitionComponent, MagicCursorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tank_in_angular';
}
