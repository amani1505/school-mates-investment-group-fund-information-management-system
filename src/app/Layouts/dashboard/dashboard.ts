import { Component } from '@angular/core';
import { Sidebar } from '@components/dashboard/sidebar/sidebar';
import { Navbar } from "@components/dashboard/navbar/navbar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'dashboard',
  imports: [Sidebar, Navbar,RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
