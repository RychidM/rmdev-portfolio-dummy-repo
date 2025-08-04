import { TestBed } from '@angular/core/testing';

import { MagicCursorService } from './magic-cursor.service';

describe('MagicCursorService', () => {
  let service: MagicCursorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicCursorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
