import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManejoQuejasCreatePage } from './manejo-quejas-create.page';

describe('ManejoQuejasCreatePage', () => {
  let component: ManejoQuejasCreatePage;
  let fixture: ComponentFixture<ManejoQuejasCreatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManejoQuejasCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManejoQuejasCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
