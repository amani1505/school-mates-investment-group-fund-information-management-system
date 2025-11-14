import { Component } from '@angular/core';
import { environment } from '@environment/environment';

@Component({
  selector: 'responsive-helper',
  imports: [],
  templateUrl: './responsive-helper.html',
  styleUrl: './responsive-helper.scss',
})
export class ResponsiveHelper {
  public env: any = environment;
}
