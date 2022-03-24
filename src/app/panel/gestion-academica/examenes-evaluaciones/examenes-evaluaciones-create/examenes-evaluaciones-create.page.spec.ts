import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamenesEvaluacionesCreatePage } from './examenes-evaluaciones-create.page';

describe('ExamenesEvaluacionesCreatePage', () => {
  let component: ExamenesEvaluacionesCreatePage;
  let fixture: ComponentFixture<ExamenesEvaluacionesCreatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenesEvaluacionesCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamenesEvaluacionesCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
