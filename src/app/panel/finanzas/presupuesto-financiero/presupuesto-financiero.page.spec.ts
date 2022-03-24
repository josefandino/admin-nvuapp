import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresupuestoFinancieroPage } from './presupuesto-financiero.page';

describe('PresupuestoFinancieroPage', () => {
  let component: PresupuestoFinancieroPage;
  let fixture: ComponentFixture<PresupuestoFinancieroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestoFinancieroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresupuestoFinancieroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
