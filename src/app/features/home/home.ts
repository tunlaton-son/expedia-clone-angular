import { Component } from '@angular/core';
import { SearchCard } from "../../featuers/home/component/search-card/search-card";

@Component({
  selector: 'app-home',
  imports: [SearchCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
