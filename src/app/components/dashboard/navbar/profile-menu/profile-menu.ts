import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ClickOutsideDirective } from '@directives/click-outside.directive';

@Component({
  selector: 'profile-menu',
  imports: [NgClass, ClickOutsideDirective],
  templateUrl: './profile-menu.html',
  styleUrl: './profile-menu.scss',
    animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'translateY(0)',
          visibility: 'visible',
        }),
      ),
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'translateY(-20px)',
          visibility: 'hidden',
        }),
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
}
)
export class ProfileMenu {
  public isMenuOpen = false;

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
