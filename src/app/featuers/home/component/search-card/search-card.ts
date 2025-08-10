import { Component } from '@angular/core';
import { FlightSearch } from '../flight-search/flight-search';

@Component({
  selector: 'app-search-card',
  imports: [FlightSearch],
  templateUrl: './search-card.html',
  styleUrl: './search-card.css'
})
export class SearchCard {
  selectedSearchType = "Flights"

  onClickUpdateSearchType(searchType:string): void {
    this.selectedSearchType  = searchType;
  } 
}
