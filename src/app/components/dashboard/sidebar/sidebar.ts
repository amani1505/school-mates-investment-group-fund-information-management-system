import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '@services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SidebarMenu } from './sidebar-menu/sidebar-menu';

@Component({
  selector: 'sidebar',
  imports: [AngularSvgIconModule, NgClass, SidebarMenu],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  //  public appJson: any = packageJson;

  constructor(public menuService: MenuService) {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
