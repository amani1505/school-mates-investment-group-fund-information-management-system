import { isPlatformBrowser, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, input, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { SubMenuItem } from '@models/menu.model';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'div[navbar-submenu]',
  imports: [NgTemplateOutlet, RouterLinkActive, RouterLink, AngularSvgIconModule],
  templateUrl: './navbar-submenu.html',
  styleUrl: './navbar-submenu.scss',
})
export class NavbarSubmenu implements AfterViewInit {
  public submenu = input<SubMenuItem[]>([]);
  @ViewChild('submenuRef') submenuRef: ElementRef<HTMLDivElement> | undefined;
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    /**
     * check if component is out of the screen
     */
    if (isPlatformBrowser(this.platformId) && this.submenuRef) {
      const submenu = this.submenuRef.nativeElement.getBoundingClientRect();
      const bounding = document.body.getBoundingClientRect();

      if (submenu.right > bounding.right) {
        const childrenElement = this.submenuRef.nativeElement.parentNode as HTMLElement;
        if (childrenElement) {
          childrenElement.style.left = '-100%';
        }
      }
    }
  }
}
