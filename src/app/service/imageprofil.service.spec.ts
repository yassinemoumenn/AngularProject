import { TestBed } from '@angular/core/testing';

import { ImageprofilService } from './imageprofil.service';

describe('ImageprofilService', () => {
  let service: ImageprofilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageprofilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
