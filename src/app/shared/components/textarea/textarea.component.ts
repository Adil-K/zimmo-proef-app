import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent implements OnInit {
  @Input() rows = 5;
  @Input() value = '';
  @Input() helperText: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  valueChanged(value: KeyboardEvent) {
    console.log(value);
  }
}
