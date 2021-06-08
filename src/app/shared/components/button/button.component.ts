import { ButtonType } from './button-type.enum';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text = 'Button';
  @Input() type: ButtonType | undefined;

  @Output() clicked = new EventEmitter<void>();

  emitClick(): void {
    this.clicked.emit();
  }
}
