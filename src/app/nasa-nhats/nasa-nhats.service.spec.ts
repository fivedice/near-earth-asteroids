import { TestBed } from '@angular/core/testing';

import { NasaNhatsService } from './nasa-nhats.service';

describe('NasaNhatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasaNhatsService = TestBed.get(NasaNhatsService);
    expect(service).toBeTruthy();
  });
});
