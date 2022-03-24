import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendarioEntretenimientoPage } from './calendario-entretenimiento.page';

describe('CalendarioEntretenimientoPage', () => {
  let component: CalendarioEntretenimientoPage;
  let fixture: ComponentFixture<CalendarioEntretenimientoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioEntretenimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarioEntretenimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
