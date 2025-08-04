import { TestBed } from '@angular/core/testing';

import { HeroSectionAnimationService } from './hero-section-animation.service';

describe('HeroSectionAnimationService', () => {
  let service: HeroSectionAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroSectionAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
