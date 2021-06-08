import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { FeedbackRadioButtonsComponent } from './components/feedback-radio-buttons/feedback-radio-buttons.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FeedbackPageComponent, FeedbackRadioButtonsComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class FeedbackModule {}
