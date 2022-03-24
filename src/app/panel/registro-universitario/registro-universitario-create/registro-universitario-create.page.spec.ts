import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroUniversitarioCreatePage } from './registro-universitario-create.page';

describe('RegistroUniversitarioCreatePage', () => {
  let component: RegistroUniversitarioCreatePage;
  let fixture: ComponentFixture<RegistroUniversitarioCreatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroUniversitarioCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroUniversitarioCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
