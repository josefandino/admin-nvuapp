import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantillasCartasMemosPage } from './pantillas-cartas-memos.page';

describe('PantillasCartasMemosPage', () => {
  let component: PantillasCartasMemosPage;
  let fixture: ComponentFixture<PantillasCartasMemosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PantillasCartasMemosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PantillasCartasMemosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
