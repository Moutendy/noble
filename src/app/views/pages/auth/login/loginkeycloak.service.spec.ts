import { TestBed } from '@angular/core/testing';

import { LoginkeycloakService } from './loginkeycloak.service';

describe('LoginkeycloakService', () => {
  let service: LoginkeycloakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginkeycloakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
