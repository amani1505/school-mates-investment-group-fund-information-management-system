import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from '@models/menu.model';
import { MenuService } from '@services/menu.service';
import { NavbarSubmenu } from '../navbar-submenu/navbar-submenu';

@Component({
  selector: 'navbar-menu',
  imports: [NgClass,NavbarSubmenu],
  templateUrl: './navbar-menu.html',
  styleUrl: './navbar-menu.scss',
})
export class NavbarMenu {
private showMenuClass = ['scale-100', 'animate-fade-in-up', 'opacity-100', 'pointer-events-auto'];
  private hideMenuClass = ['scale-95', 'animate-fade-out-down', 'opacity-0', 'pointer-events-none'];

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleMenu(menu: MenuItem): void {
    menu.selected = !menu.selected;
  }

  public mouseEnter(event: any): void {
    let element = event.target.querySelector('navbar-submenu').children[0];
    if (element) {
      this.hideMenuClass.forEach((c) => element.classList.remove(c));
      this.showMenuClass.forEach((c) => element.classList.add(c));
    }
  }

  public mouseLeave(event: any): void {
    let element = event.target.querySelector('navbar-submenu').children[0];
    if (element) {
      this.showMenuClass.forEach((c) => element.classList.remove(c));
      this.hideMenuClass.forEach((c) => element.classList.add(c));
    }
  }

}
