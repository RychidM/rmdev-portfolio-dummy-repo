import { TestBed } from '@angular/core/testing';

import { GeneralAnimationsService } from './general-animations.service';

describe('GeneralAnimationsService', () => {
  let service: GeneralAnimationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralAnimationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
