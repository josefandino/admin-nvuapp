import { TestBed } from '@angular/core/testing';

import { AddStudentsService } from './students.service';

describe('AddStudentsService', () => {
  let service: AddStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
