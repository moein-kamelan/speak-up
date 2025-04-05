import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarNavigationComponent } from './sidebar-navigation/sidebar-navigation.component';
import { SidebarNavigationButtonComponent } from './sidebar-navigation/sidebar-navigation-button/sidebar-navigation-button.component';

@Component({
  selector: 'app-sidebar',
  imports: [ SidebarHeaderComponent , SidebarNavigationComponent ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  {

}
