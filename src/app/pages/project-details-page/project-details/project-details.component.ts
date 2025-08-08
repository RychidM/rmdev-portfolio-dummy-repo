import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import projects from '../../../../constants/project-data';
import { Project } from '../../../shared/interfaces/project';
import { HeaderComponent } from "../../../components/header/header.component";
import { SmoothScrollDirective } from '../../../shared/directives/smooth-scroll-directive/smooth-scroll.directive';
import { ProjectHeroComponent } from "../components/project-hero/project-hero.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SmoothScrollDirective, ProjectHeroComponent, FooterComponent],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  projectId: string | null = null;
  projectData: Project | undefined;
  private routeSub: Subscription | undefined;

  // 1. Inject ActivatedRoute to access route information.
  // You would also inject a service to fetch project data.
  // constructor(private route: ActivatedRoute, private projectService: ProjectService) {}
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // 2. Subscribe to paramMap to get the 'id' from the URL.
    // This is the recommended reactive approach.
    this.routeSub = this.route.paramMap.subscribe((params: ParamMap) => {
      this.projectId = params.get('id');
      this.getProjectData(this.projectId);
    });
  }

  getProjectData(id: string | null): void {
    if (!id) {
      console.error('Project ID is missing from the route.');
      return;
    }

    console.log(`Fetching data for project with id: ${id}`);
    // 3. Use the id to fetch the specific project's data from a service.
    this.projectData = projects[id];
  }

  ngOnDestroy(): void {
    // 4. Unsubscribe to prevent memory leaks.
    this.routeSub?.unsubscribe();
  }
}
