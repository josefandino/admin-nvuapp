import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViceRectoriaPostGradoInvestigacionPage } from './vice-rectoria-post-grado-investigacion.page';

describe('ViceRectoriaPostGradoInvestigacionPage', () => {
  let component: ViceRectoriaPostGradoInvestigacionPage;
  let fixture: ComponentFixture<ViceRectoriaPostGradoInvestigacionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViceRectoriaPostGradoInvestigacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViceRectoriaPostGradoInvestigacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
