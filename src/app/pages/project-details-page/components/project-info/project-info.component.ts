import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MiniInfo } from '../../../../shared/interfaces/project';

@Component({
  selector: 'app-project-info',
  imports: [CommonModule],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss'
})
export class ProjectInfoComponent {
  @Input() info: MiniInfo[] = [];
}
