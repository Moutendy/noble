import { TestBed } from '@angular/core/testing';

import { TaxehabitationserviceService } from './taxehabitationservice.service';

describe('TaxehabitationserviceService', () => {
  let service: TaxehabitationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxehabitationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
