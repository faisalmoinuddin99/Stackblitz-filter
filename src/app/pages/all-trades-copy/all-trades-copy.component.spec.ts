import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTradesCopyComponent } from './all-trades-copy.component';

describe('AllTradesCopyComponent', () => {
  let component: AllTradesCopyComponent;
  let fixture: ComponentFixture<AllTradesCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTradesCopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTradesCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
