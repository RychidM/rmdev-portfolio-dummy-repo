import { TestBed } from '@angular/core/testing';

import { PortfolioSectionAnimationService } from './portfolio-section-animation.service';

describe('PortfolioSectionAnimationService', () => {
  let service: PortfolioSectionAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioSectionAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
