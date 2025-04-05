import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-navigation-button',
  imports: [RouterModule , RouterLink , RouterLinkActive],
  templateUrl: './sidebar-navigation-button.component.html',
  styleUrl: './sidebar-navigation-button.component.css'
})
export class SidebarNavigationButtonComponent {
@Input() navigator:any

}
