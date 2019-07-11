import { TestBed } from '@angular/core/testing';

import { LoginceosService } from './loginceos.service';

describe('LoginceosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginceosService = TestBed.get(LoginceosService);
    expect(service).toBeTruthy();
  });
});
