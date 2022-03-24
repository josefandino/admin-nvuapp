import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcademiaGestionProgramasPage } from './academia-gestion-programas.page';

describe('AcademiaGestionProgramasPage', () => {
  let component: AcademiaGestionProgramasPage;
  let fixture: ComponentFixture<AcademiaGestionProgramasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademiaGestionProgramasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcademiaGestionProgramasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
