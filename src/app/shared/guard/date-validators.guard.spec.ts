import { TestBed } from '@angular/core/testing';

import { DateValidatorsGuard } from './date-validators.guard';

describe('DateValidatorsGuard', () => {
  let guard: DateValidatorsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DateValidatorsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
