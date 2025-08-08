import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHeroComponent } from './project-hero.component';

describe('ProjectHeroComponent', () => {
  let component: ProjectHeroComponent;
  let fixture: ComponentFixture<ProjectHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
