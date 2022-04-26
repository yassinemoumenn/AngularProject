import { TestBed } from '@angular/core/testing';

import { CompagnecsvService } from './compagnecsv.service';

describe('CompagnecsvService', () => {
  let service: CompagnecsvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompagnecsvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
