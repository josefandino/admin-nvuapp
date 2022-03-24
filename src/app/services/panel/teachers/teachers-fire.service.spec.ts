import { TestBed } from '@angular/core/testing';

import { TeachersFireService } from './teachers-fire.service';

describe('TeachersFireService', () => {
  let service: TeachersFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeachersFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
