import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar-mobile',
  imports: [],
  templateUrl: './sidebar-mobile.component.html',
  styleUrl: './sidebar-mobile.component.css'
})
export class SidebarMobileComponent {
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
