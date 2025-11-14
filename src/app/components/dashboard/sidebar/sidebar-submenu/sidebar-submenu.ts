import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SubMenuItem } from '@models/menu.model';
import { MenuService } from '@services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'sidebar-submenu',
  imports: [NgClass, RouterLink, NgTemplateOutlet, RouterLinkActive, AngularSvgIconModule],
  templateUrl: './sidebar-submenu.html',
  styleUrl: './sidebar-submenu.scss',
})
export class SidebarSubmenu {
  public submenu = input<SubMenuItem>();

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
}
