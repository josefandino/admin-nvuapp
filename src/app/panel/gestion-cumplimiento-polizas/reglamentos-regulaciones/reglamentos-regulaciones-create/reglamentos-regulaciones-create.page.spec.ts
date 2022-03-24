import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReglamentosRegulacionesCreatePage } from './reglamentos-regulaciones-create.page';

describe('ReglamentosRegulacionesCreatePage', () => {
  let component: ReglamentosRegulacionesCreatePage;
  let fixture: ComponentFixture<ReglamentosRegulacionesCreatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglamentosRegulacionesCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReglamentosRegulacionesCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
