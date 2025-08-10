import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar";
import { Home } from "./features/home/home";
import { CommonModule } from '@angular/common';
import { SearchCard } from './featuers/home/component/search-card/search-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,Navbar, Home ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('booking-admin');
}
