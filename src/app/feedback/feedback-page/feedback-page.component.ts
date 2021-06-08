import { FeedbackService } from './../services/feedback.service';
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
  constructor(private feedbackService: FeedbackService) {}

  ButtonType = ButtonType;
  selectedOption = 0;
  textAreaSectionVisible = false;
  formSubmitted = false;
  validatorMessage = '';

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      score: new FormControl({ value: '', disabled: this.formSubmitted }),
      feedbackMessage: new FormControl('', Validators.required),
    });
  }

  onOptionSelect(): void {
    if (this.formSubmitted) {
      return;
    }
    this.textAreaSectionVisible = true;
  }

  onSubmit(): void {
    if (!this.feedbackForm.valid) {
      this.validatorMessage = 'Dit mag niet leeg zijn';
      return;
    }

    const feedback = this.feedbackForm.value;

    this.feedbackService.sendFeedback(feedback).subscribe(
      () => {
        this.formSubmitted = true;
      },
      (err) => {
        // show error alert
      }
    );

    console.log('submitted form with:');
    console.log(this.feedbackForm.value as Feedback);
  }
}
