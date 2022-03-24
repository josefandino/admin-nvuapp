import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReclutamientoDocentePage } from './reclutamiento-docente.page';

describe('ReclutamientoDocentePage', () => {
  let component: ReclutamientoDocentePage;
  let fixture: ComponentFixture<ReclutamientoDocentePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclutamientoDocentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReclutamientoDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
