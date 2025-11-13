import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmButtonImports } from '@components/ui/button';
import { NgIcon } from '@ng-icons/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HlmButtonImports,NgIcon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('school-mates-investment-group-fund-information-management-system');
}
