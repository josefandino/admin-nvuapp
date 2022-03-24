import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsociacionAlumonsPage } from './asociacion-alumons.page';

describe('AsociacionAlumonsPage', () => {
  let component: AsociacionAlumonsPage;
  let fixture: ComponentFixture<AsociacionAlumonsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsociacionAlumonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsociacionAlumonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
