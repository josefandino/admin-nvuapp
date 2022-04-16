import { TestBed } from '@angular/core/testing';

import { CicloAcademicoService } from './ciclo-academico.service';

describe('CicloAcademicoService', () => {
  let service: CicloAcademicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CicloAcademicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
