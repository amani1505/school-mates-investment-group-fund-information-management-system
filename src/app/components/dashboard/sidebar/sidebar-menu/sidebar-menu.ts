import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SubMenuItem } from '@models/menu.model';
import { MenuService } from '@services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SidebarSubmenu } from '../sidebar-submenu/sidebar-submenu';

@Component({
  selector: 'sidebar-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgClass,
    AngularSvgIconModule,
    RouterLink,
    RouterLinkActive,
    NgTemplateOutlet,
    SidebarSubmenu,
  ],
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
})
export class SidebarMenu {
  constructor(public menuService: MenuService) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }
}
