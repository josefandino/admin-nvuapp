import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionCumplimientoPolizasPage } from './gestion-cumplimiento-polizas.page';

describe('GestionCumplimientoPolizasPage', () => {
  let component: GestionCumplimientoPolizasPage;
  let fixture: ComponentFixture<GestionCumplimientoPolizasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCumplimientoPolizasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCumplimientoPolizasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
