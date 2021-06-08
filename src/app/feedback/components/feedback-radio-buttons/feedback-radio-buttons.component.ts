import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-radio-buttons',
  templateUrl: './feedback-radio-buttons.component.html',
  styleUrls: ['./feedback-radio-buttons.component.scss'],
})
export class FeedbackRadioButtonsComponent implements OnInit {
  radioButtonOptions = [1, 2, 3, 4, 5];

  selectedOption: number | undefined;

  @Output() selectRadioOption = new EventEmitter<number>();
  @Input() title = 'Title';

  constructor() {}

  ngOnInit(): void {}

  onOptionClick(option: number) {
    this.selectRadioOption.emit(option);
  }
}
