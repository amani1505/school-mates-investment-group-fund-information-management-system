import { Component } from '@angular/core';
import { MenuService } from '@services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarMenu } from './navbar-menu/navbar-menu';
import { ProfileMenu } from './profile-menu/profile-menu';

@Component({
  selector: 'app-navbar',
  imports: [AngularSvgIconModule,NavbarMenu,ProfileMenu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  constructor(private menuService: MenuService) {}

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
