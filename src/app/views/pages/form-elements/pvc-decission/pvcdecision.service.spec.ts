import { TestBed } from '@angular/core/testing';

import { PvcdecisionService } from './pvcdecision.service';

describe('PvcdecisionService', () => {
  let service: PvcdecisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvcdecisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
