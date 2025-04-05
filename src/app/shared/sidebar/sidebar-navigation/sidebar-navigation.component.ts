import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { SidebarNavigationButtonComponent } from './sidebar-navigation-button/sidebar-navigation-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-navigation',
  imports: [RouterModule , RouterLink , RouterLinkActive , SidebarNavigationButtonComponent , CommonModule],
  templateUrl: './sidebar-navigation.component.html',
  styleUrl: './sidebar-navigation.component.css'
})
export class SidebarNavigationComponent {
navigators:any[] = [
  {title : "داشبورد" , path:"/" },
  {title : "دوره های من" , path:"/myCourses"},
  {title : "بسته های آموزش های من" , path:"/myPackages"},
  {title : "تراکنش ها" , path:"/Transactions"},
  {title : "پشتیبانی" , path:"/support"},
  
]
}
