import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SidebarMobileComponent } from './shared/sidebar-mobile/sidebar-mobile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet  , SidebarComponent , SidebarMobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'speak-up';

}
