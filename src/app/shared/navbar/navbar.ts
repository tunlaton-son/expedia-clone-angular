import { Component } from '@angular/core';
import { LucideAngularModule, ChevronDown, FileIcon, AlignJustify } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  readonly FileIcon = FileIcon;
  readonly ChevronDown = ChevronDown;
  readonly AlignJustify = AlignJustify;

  openPopUpMenu  = false;

  onClickOpenMenu(): void {
    this.openPopUpMenu  = !this.openPopUpMenu;
  }
}
