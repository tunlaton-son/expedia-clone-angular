import { Component, HostListener, ViewChild, ElementRef, inject } from '@angular/core';
import { Dropdown } from '../../../../shared/dropdown/dropdown';
import { TextInput } from "../../../../shared/input/input";
import { SearchBox } from '../../../../shared/search-box/search-box';
import { Api } from '../../../../services/api';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-flight-search',
  imports: [Dropdown, TextInput, SearchBox, AsyncPipe],
  templateUrl: './flight-search.html',
  styleUrl: './flight-search.css',
  providers: [TitleCasePipe] 
})
export class FlightSearch {

  constructor(private apiService: Api, private titleCasePipe: TitleCasePipe) {}

  private searchItemSubject = new BehaviorSubject<any[]>([]);
  searchItem$ = this.searchItemSubject.asObservable();

  dropdownItems = ["Economy", "Premium economy", "Business Class", "First Class"];
  selectedTravelClass = "Economy";
  isClicked = false;

  @ViewChild('leavingFromSearchBox') leavingFromSearchBox!: SearchBox;
  @ViewChild('goingToSearchBox') goingToSearchBox!: SearchBox;

  destinationType = "return";
  onClickUpdateDestinationType(destinationType: string): void {
    this.destinationType = destinationType;
  }

  onChangeTravelClass(travelClass: string): void {
    this.selectedTravelClass = travelClass
  }

  onToggleLeavingFrom(): void {
     this.leavingFromSearchBox.onToggle();
     this.goingToSearchBox.setToggle(false)
  }

  onToggleGoingTo(): void {
     this.goingToSearchBox.onToggle();
    this.leavingFromSearchBox.setToggle(false)
  }

   ngOnInit(): void {
    
  }

  onSearchAirport(keyword:string){
    this.apiService.searchAirport(keyword).subscribe({
      next: (response) => {
        let data = response.data.filter((e:any)=>e.subType !== 'CITY');
        this.searchItemSubject.next(data);
        console.log('GET request successful', this.searchItemSubject );
      },
      error: (error) => {
        console.error('GET request failed', error);
      }
    });
  }

  getLabel(value:any): string {
    let destination : string =  value ? this.titleCasePipe.transform(value?.address.cityName)  + ", " + value?.iataCode + ", " + this.titleCasePipe.transform(value.name) : "Leaving from"
    return destination;
  }

  onSwapDestination(){
    let tempLeaving = this.leavingFromSearchBox.selectedItem;
    let tempGoing = this.goingToSearchBox.selectedItem;

    this.leavingFromSearchBox.selectedItem = tempGoing;
    this.goingToSearchBox.selectedItem = tempLeaving;
    this.isClicked = !this.isClicked;
  }
}
