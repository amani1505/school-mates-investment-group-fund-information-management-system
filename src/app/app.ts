import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponsiveHelper } from '@shared/componentsresponsive-helper/responsive-helper';
import { ThemeService } from './core/services/theme.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ResponsiveHelper],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('School Mates Investment Group Fund Information Management System');
   constructor(public themeService: ThemeService) {}
}
