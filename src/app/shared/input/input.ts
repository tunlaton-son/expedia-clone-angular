import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [TitleCasePipe],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class TextInput {
  @Input() placeHolder = "";
  @Input() cssClass = "";
  @Input() icon = "";
  @Input() disabled = false;
  @Input() type = ""
  @Input() label = ""

  inputValue = '';

  get displayValue(): string {
    return this.type !== 'text' ?  this.placeHolder : this.inputValue;
  }
}
