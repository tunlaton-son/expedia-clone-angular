import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css'
})
export class Dropdown {
  @Input() items:string[] = [];

  @Output() selectedItemEvent = new EventEmitter<string>();

  selectItem(value: string) {
    this.selectedItemEvent.emit(value);
  }
}
