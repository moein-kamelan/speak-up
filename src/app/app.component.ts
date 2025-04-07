import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SidebarMobileComponent } from './shared/sidebar-mobile/sidebar-mobile.component';
import { MyCoursesRoutingModule } from './my-courses/my-courses-routing.module';
import { MyCoursesModule } from './my-courses/my-courses.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet  , SidebarComponent , SidebarMobileComponent , MyCoursesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'speak-up';

}
