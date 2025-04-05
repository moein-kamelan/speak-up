import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { SidebarNavigationButtonComponent } from './sidebar-navigation-button/sidebar-navigation-button.component';

@Component({
  selector: 'app-sidebar-navigation',
  imports: [RouterModule , RouterLink , RouterLinkActive , SidebarNavigationButtonComponent],
  templateUrl: './sidebar-navigation.component.html',
  styleUrl: './sidebar-navigation.component.css'
})
export class SidebarNavigationComponent {

}
