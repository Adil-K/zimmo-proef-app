import { Component } from '@angular/core';
import { ButtonType } from 'src/app/shared/components/button/button-type.enum';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss'],
})
export class FeedbackPageComponent {
  constructor() {}

  ButtonType = ButtonType;

  selectedOption = 0;

  onOptionSelect(selected: number) {
    this.selectedOption = selected;
    console.log(this.selectedOption);
  }
}
