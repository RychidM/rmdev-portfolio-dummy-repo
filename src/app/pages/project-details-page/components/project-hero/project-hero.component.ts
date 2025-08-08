import { Component, Input } from '@angular/core';
import { ProjectInfoComponent } from "../project-info/project-info.component";
import { CommonModule } from '@angular/common';
import { Project } from '../../../../shared/interfaces/project';

@Component({
  selector: 'app-project-hero',
  imports: [ProjectInfoComponent, CommonModule],
  templateUrl: './project-hero.component.html',
  styleUrl: './project-hero.component.scss'
})
export class ProjectHeroComponent {
  @Input() projectData: Project | undefined;
}
