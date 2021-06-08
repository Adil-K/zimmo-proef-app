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
  @Input() title = 'Title';
  @Input() disable = false;

  @Output() public valueChange = new EventEmitter<number>();

  radioButtonOptions = [1, 2, 3, 4, 5];
  value!: number;

  propagateChange!: (value: number) => {};
  propagateTouched!: (_: unknown) => {};

  constructor() {}

  writeValue(value: number): void {
    this.value = value;
    if (this.propagateChange) {
      this.propagateChange(this.value);
    }
  }

  registerOnChange(fn: (param: number) => {}): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.propagateTouched = fn;
  }

  optionChanged(option: number): void {
    this.propagateTouched(null);
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
