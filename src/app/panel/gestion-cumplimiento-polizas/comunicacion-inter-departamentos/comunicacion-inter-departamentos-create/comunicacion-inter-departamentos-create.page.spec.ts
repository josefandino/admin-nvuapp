import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunicacionInterDepartamentosCreatePage } from './comunicacion-inter-departamentos-create.page';

describe('ComunicacionInterDepartamentosCreatePage', () => {
  let component: ComunicacionInterDepartamentosCreatePage;
  let fixture: ComponentFixture<ComunicacionInterDepartamentosCreatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacionInterDepartamentosCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunicacionInterDepartamentosCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
