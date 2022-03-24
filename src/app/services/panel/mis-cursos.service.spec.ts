import { TestBed } from '@angular/core/testing';

import { MisCursosService } from './mis-cursos.service';

describe('MisCursosService', () => {
  let service: MisCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
