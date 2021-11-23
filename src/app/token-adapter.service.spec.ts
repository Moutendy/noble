import { TestBed } from '@angular/core/testing';

import { TokenAdapterService } from './token-adapter.service';

describe('TokenAdapterService', () => {
  let service: TokenAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
