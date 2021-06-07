import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackRadioButtonsComponent } from './feedback-radio-buttons.component';

describe('FeedbackRadioButtonsComponent', () => {
  let component: FeedbackRadioButtonsComponent;
  let fixture: ComponentFixture<FeedbackRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackRadioButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
