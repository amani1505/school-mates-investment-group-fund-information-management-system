import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '@services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarMobileMenu } from './navbar-mobile-menu/navbar-mobile-menu';

@Component({
  selector: 'navbar-mobile',
  imports: [AngularSvgIconModule,NgClass,NavbarMobileMenu],
  templateUrl: './navbar-mobile.html',
  styleUrl: './navbar-mobile.scss',
})
export class NavbarMobile {
constructor(public menuService: MenuService) {}


  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = false;
  }
}
