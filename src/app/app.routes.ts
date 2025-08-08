import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home/home.component';
import { ProjectDetailsComponent } from './pages/project-details-page/project-details/project-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'project-details/:id', component: ProjectDetailsComponent },
];
