import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GradosConvocatoriasCreatePage } from './grados-convocatorias-create.page';

describe('GradosConvocatoriasCreatePage', () => {
  let component: GradosConvocatoriasCreatePage;
  let fixture: ComponentFixture<GradosConvocatoriasCreatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GradosConvocatoriasCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GradosConvocatoriasCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
