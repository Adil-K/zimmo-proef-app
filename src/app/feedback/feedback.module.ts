import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { FeedbackRadioButtonsComponent } from './components/feedback-radio-buttons/feedback-radio-buttons.component';



@NgModule({
  declarations: [
    FeedbackPageComponent,
    FeedbackRadioButtonsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeedbackModule { }
