import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ClickOutsideDirective } from '@directives';

@Component({
  selector: 'profile-menu',
  imports: [NgClass,ClickOutsideDirective],
  templateUrl: './profile-menu.html',
  styleUrl: './profile-menu.scss',
})
export class ProfileMenu {
 public isMenuOpen = false;


  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
