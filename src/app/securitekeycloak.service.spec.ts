import { TestBed } from '@angular/core/testing';

import { SecuritekeycloakService } from './securitekeycloak.service';

describe('SecuritekeycloakService', () => {
  let service: SecuritekeycloakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecuritekeycloakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
