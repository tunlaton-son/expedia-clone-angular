import { Component, Input, ViewChild, HostListener, ElementRef, Output, EventEmitter, Inject, inject, SimpleChanges, ChangeDetectorRef  } from '@angular/core';
import { Api } from '../../services/api';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
  imports:[TitleCasePipe]
})
export class SearchBox {

  toggle: boolean = false;
  keyword: string = "";
  @Input() label = "";
  @Output() searchEvent = new EventEmitter<string>();
  @Input() searchItem:any[] | null = [];

  selectedItem: any | null = null;

    numberOfIterations: number = 20; // Or dynamically set this value
    numbers: number[] = Array.from({ length: this.numberOfIterations }, (_, i) => i);

   @ViewChild('inputElement') inputElement!: ElementRef;
   ngAfterViewInit() {
    console.log("Test")
    this.inputElement.nativeElement.focus();
  }

  @ViewChild('searchBoxInput', { read: ElementRef }) searchBoxInput!: ElementRef;
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.toggle == true && this.searchBoxInput) {
      if (!this.searchBoxInput.nativeElement.contains(event.target)) {
        this.toggle = false;
      }
    }
  }
  

  get getToggle(): boolean {
    return this.toggle;
  }

  get getValue():string {
    return this.inputElement.nativeElement.value;
  }

  setToggle(value: boolean) {
    this.toggle = value;
  }

  onToggle() {
    this.toggle = !this.toggle;
    this.inputElement.nativeElement.focus();
  }

  onChangeInput(value:string) {
     this.searchEvent.emit(value);
  }

  onClear() {
    this.inputElement.nativeElement.value = "";
  }

  onSelectItem(value: any) :void {
    this.selectedItem = value;
    this.onToggle();
    this.onClear();
  }
}
