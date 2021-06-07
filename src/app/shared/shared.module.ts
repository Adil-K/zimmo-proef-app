import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [ButtonComponent, TextareaComponent, AlertComponent],
  exports: [ButtonComponent, TextareaComponent, AlertComponent],
  imports: [CommonModule],
})
export class SharedModule {}
