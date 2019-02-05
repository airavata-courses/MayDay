import { TestBed } from '@angular/core/testing';

import { AuthRouterGuardService } from './auth-router-guard.service';

describe('AuthRouterGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthRouterGuardService = TestBed.get(AuthRouterGuardService);
    expect(service).toBeTruthy();
  });
});
