import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LieuxDeTravailPage } from './lieux-de-travail.page';

describe('LieuxDeTravailPage', () => {
  let component: LieuxDeTravailPage;
  let fixture: ComponentFixture<LieuxDeTravailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuxDeTravailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LieuxDeTravailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
