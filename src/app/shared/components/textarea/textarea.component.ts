import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() rows = 5;
  @Input() value = '';
  @Input() helperText = '';

  @Output() public valueChange = new EventEmitter<string>();

  propagateChange!: (value: string) => {};
  propagateTouched!: (_: unknown) => {};

  constructor() {}

  writeValue(value: string): void {
    if (value !== undefined) {
      this.value = value;
      if (this.propagateChange) {
        this.propagateChange(this.value);
      }
    }
  }

  registerOnChange(fn: (param: string) => {}): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.propagateTouched = fn;
  }

  onTouched(_?: unknown): void {
    this.propagateTouched(null);
  }

  valueChanged(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    const value = target.value;
    this.updateValue(value);
  }

  updateValue(value: string): void {
    this.value = value;
    this.valueChange.next(value);
    if (this.propagateChange) {
      this.propagateChange(value);
    }
  }
}
