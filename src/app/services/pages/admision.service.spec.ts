import { TestBed } from '@angular/core/testing';

import { AdmisionService } from './admision.service';

describe('AdmisionService', () => {
  let service: AdmisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
