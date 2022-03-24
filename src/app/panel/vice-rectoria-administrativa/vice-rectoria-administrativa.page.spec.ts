import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViceRectoriaAdministrativaPage } from './vice-rectoria-administrativa.page';

describe('ViceRectoriaAdministrativaPage', () => {
  let component: ViceRectoriaAdministrativaPage;
  let fixture: ComponentFixture<ViceRectoriaAdministrativaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViceRectoriaAdministrativaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViceRectoriaAdministrativaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
