import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReglamentosRegulacionesPage } from './reglamentos-regulaciones.page';

describe('ReglamentosRegulacionesPage', () => {
  let component: ReglamentosRegulacionesPage;
  let fixture: ComponentFixture<ReglamentosRegulacionesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglamentosRegulacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReglamentosRegulacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
