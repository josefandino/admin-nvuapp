import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamenesEvaluacionesPage } from './examenes-evaluaciones.page';

describe('ExamenesEvaluacionesPage', () => {
  let component: ExamenesEvaluacionesPage;
  let fixture: ComponentFixture<ExamenesEvaluacionesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenesEvaluacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamenesEvaluacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
