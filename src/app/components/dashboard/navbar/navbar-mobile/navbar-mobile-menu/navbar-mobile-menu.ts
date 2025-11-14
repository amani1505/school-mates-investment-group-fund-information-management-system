import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SubMenuItem } from '@models/menu.model';
import { MenuService } from '@services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarMobileSubmenu } from '../navbar-mobile-submenu/navbar-mobile-submenu';

@Component({
  selector: 'navbar-mobile-menu',
  imports: [NgClass, AngularSvgIconModule, NgTemplateOutlet, RouterLink, RouterLinkActive,NavbarMobileSubmenu],
  templateUrl: './navbar-mobile-menu.html',
  styleUrl: './navbar-mobile-menu.scss',
})
export class NavbarMobileMenu {
  constructor(public menuService: MenuService) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  public closeMenu() {
    this.menuService.showMobileMenu = false;
  }
}
