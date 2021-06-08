import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonType } from 'src/app/shared/components/button/button-type.enum';

interface Feedback {
  score: number;
  feedbackMessage: string;
}

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss'],
})
export class FeedbackPageComponent implements OnInit {
  feedbackForm!: FormGroup;
  constructor() {}

  ButtonType = ButtonType;
  selectedOption = 0;
  textAreaSectionVisible = false;
  formSubmitted = false;
  validatorMessage = '';

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      score: new FormControl(''),
      feedbackMessage: new FormControl('', Validators.required),
    });
  }

  onOptionSelect(): void {
    if (this.formSubmitted) {
      return;
    }
    this.textAreaSectionVisible = true;
  }

  onSend(): void {
    console.log('submitted form with:');
    console.table(this.feedbackForm.value as Feedback);
    this.setValidatorMessage();
  }

  setValidatorMessage(): void {
    if (this.feedbackForm.invalid) {
      this.validatorMessage = 'Dit mag niet leeg zijn';
      return;
    }
    this.validatorMessage = '';
  }
}
