import { TestBed } from '@angular/core/testing';

import { AuthService } from './register.service';

describe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
