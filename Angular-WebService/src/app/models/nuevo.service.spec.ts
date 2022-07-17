import { TestBed } from '@angular/core/testing';

import { NuevoService } from './nuevo.service';

describe('NuevoService', () => {
  let service: NuevoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
