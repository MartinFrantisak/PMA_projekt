import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardanoPage } from './cardano.page';

describe('CardanoPage', () => {
  let component: CardanoPage;
  let fixture: ComponentFixture<CardanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardanoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
