import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViceRectoriaAcademicaPage } from './vice-rectoria-academica.page';

describe('ViceRectoriaAcademicaPage', () => {
  let component: ViceRectoriaAcademicaPage;
  let fixture: ComponentFixture<ViceRectoriaAcademicaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViceRectoriaAcademicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViceRectoriaAcademicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
