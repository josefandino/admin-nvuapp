import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionCumplimientoPolizasCreatePage } from './gestion-cumplimiento-polizas-create.page';

describe('GestionCumplimientoPolizasCreatePage', () => {
  let component: GestionCumplimientoPolizasCreatePage;
  let fixture: ComponentFixture<GestionCumplimientoPolizasCreatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCumplimientoPolizasCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCumplimientoPolizasCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
