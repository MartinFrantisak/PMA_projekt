import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolkadotPage } from './polkadot.page';

describe('PolkadotPage', () => {
  let component: PolkadotPage;
  let fixture: ComponentFixture<PolkadotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolkadotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolkadotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
