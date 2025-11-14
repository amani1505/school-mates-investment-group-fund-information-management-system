import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { SubMenuItem } from '@models/menu.model';
import { MenuService } from '@services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'navbar-mobile-submenu',
  imports: [NgTemplateOutlet, RouterLinkActive, RouterLink, AngularSvgIconModule,NgClass],
  templateUrl: './navbar-mobile-submenu.html',
  styleUrl: './navbar-mobile-submenu.scss',
})
export class NavbarMobileSubmenu {
 public submenu = input<SubMenuItem>({});

  constructor(public menuService: MenuService) {}



  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }

  public closeMobileMenu() {
    this.menuService.showMobileMenu = false;
  }
}
