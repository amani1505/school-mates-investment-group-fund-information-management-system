import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { ResponsiveHelper } from '@shared/components/responsive-helper/responsive-helper';


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
