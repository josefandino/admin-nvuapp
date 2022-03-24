import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunicacionInterDepartamentosPage } from './comunicacion-inter-departamentos.page';

describe('ComunicacionInterDepartamentosPage', () => {
  let component: ComunicacionInterDepartamentosPage;
  let fixture: ComponentFixture<ComunicacionInterDepartamentosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacionInterDepartamentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunicacionInterDepartamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
