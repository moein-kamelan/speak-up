import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SidebarMobileComponent } from './shared/sidebar-mobile/sidebar-mobile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , RouterLink , RouterModule , RouterLinkActive , SidebarComponent , SidebarMobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'speak-up';
  @ViewChild("overlay") overlay? : ElementRef 

  openMenu(menu:any) {
    menu.classList.add("active")
    this.overlay?.nativeElement.classList.add("active")
  }

  closeMenu(menu : any) {
    menu.classList.remove("active")
    this.overlay?.nativeElement.classList.remove("active")
  }
}
