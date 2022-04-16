import { TestBed } from '@angular/core/testing';

import { CuerpoDocenteService } from './cuerpo-docente.service';

describe('CuerpoDocenteService', () => {
  let service: CuerpoDocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuerpoDocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
