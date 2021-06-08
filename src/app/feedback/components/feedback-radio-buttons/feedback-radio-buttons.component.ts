import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-feedback-radio-buttons',
  templateUrl: './feedback-radio-buttons.component.html',
  styleUrls: ['./feedback-radio-buttons.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FeedbackRadioButtonsComponent),
      multi: true,
    },
  ],
})
export class FeedbackRadioButtonsComponent implements ControlValueAccessor {
  @Input() value!: number;
  @Input() title = 'Title';

  @Output() public valueChange = new EventEmitter<number>();

  selectedOption!: number;
  radioButtonOptions = [1, 2, 3, 4, 5];

  propagateChange!: (value: number) => {};
  propagateTouched!: (_: unknown) => {};

  constructor() {}

  writeValue(value: number): void {
    if (value !== undefined) {
      this.value = value;
      if (this.propagateChange) {
        this.propagateChange(this.value);
      }
    }
  }

  registerOnChange(fn: (param: number) => {}): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.propagateTouched = fn;
  }

  optionChanged(option: number): void {
    this.updateValue(option);
  }

  updateValue(value: number): void {
    this.value = value;
    this.valueChange.next(value);
    if (this.propagateChange) {
      this.propagateChange(value);
    }
  }
}
