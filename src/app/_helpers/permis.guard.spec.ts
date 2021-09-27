import { TestBed } from '@angular/core/testing';

import { PermisGuard } from './permis.guard';

describe('PermisGuard', () => {
  let guard: PermisGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
