import { TestBed } from '@angular/core/testing';

import { MessagevariableService } from './messagevariable.service';

describe('MessagevariableService', () => {
  let service: MessagevariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagevariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
