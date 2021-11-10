import { TestBed } from '@angular/core/testing';

import { PvcevenementService } from './pvcevenement.service';

describe('PvcevenementService', () => {
  let service: PvcevenementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvcevenementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
