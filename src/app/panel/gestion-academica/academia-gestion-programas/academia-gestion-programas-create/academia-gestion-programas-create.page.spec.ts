import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcademiaGestionProgramasCreatePage } from './academia-gestion-programas-create.page';

describe('AcademiaGestionProgramasCreatePage', () => {
  let component: AcademiaGestionProgramasCreatePage;
  let fixture: ComponentFixture<AcademiaGestionProgramasCreatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademiaGestionProgramasCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcademiaGestionProgramasCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
