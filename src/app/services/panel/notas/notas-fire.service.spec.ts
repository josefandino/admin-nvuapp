import { TestBed } from '@angular/core/testing';

import { NotasFireService } from './notas-fire.service';

describe('NotasFireService', () => {
  let service: NotasFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
