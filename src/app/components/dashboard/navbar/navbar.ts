import { Component } from '@angular/core';
import { MenuService } from '@services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProfileMenu } from './profile-menu/profile-menu';
import { NavbarMobile } from './navbar-mobile/navbar-mobile';

@Component({
  selector: 'navbar',
  imports: [AngularSvgIconModule, ProfileMenu, NavbarMobile],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(private menuService: MenuService) {}

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
