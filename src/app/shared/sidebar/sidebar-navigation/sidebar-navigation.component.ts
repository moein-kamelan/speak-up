import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { SidebarNavigationButtonComponent } from './sidebar-navigation-button/sidebar-navigation-button.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar-navigation',
  imports: [ SidebarNavigationButtonComponent , CommonModule],
  templateUrl: './sidebar-navigation.component.html',
  styleUrl: './sidebar-navigation.component.css'
})
export class SidebarNavigationComponent implements OnInit{
  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnInit() {
    this.navigators.forEach(navigator => {
      navigator.svg = this.sanitizer.bypassSecurityTrustHtml(navigator.svg);
    });
  }
navigators:any[] = [
  {title : "داشبورد" , path:"/dashboard"  , svg : ` <svg
  class="sidebar-icon fill-current size-7.5 shrink-0 "
  viewBox="0 0 30 31"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.5625 4.57748C5.02031 4.57748 3.75 5.8478 3.75 7.38998V9.26498C3.75 10.8072 5.02031 12.0775 6.5625 12.0775H11.5625C13.1047 12.0775 14.375 10.8072 14.375 9.26498V7.38998C14.375 5.8478 13.1047 4.57748 11.5625 4.57748H6.5625ZM18.4375 4.57748C16.8953 4.57748 15.625 5.8478 15.625 7.38998V15.515C15.625 17.0572 16.8953 18.3275 18.4375 18.3275H23.4375C24.9797 18.3275 26.25 17.0572 26.25 15.515V7.38998C26.25 5.8478 24.9797 4.57748 23.4375 4.57748H18.4375ZM6.5625 6.45248H11.5625C12.0916 6.45248 12.5 6.86092 12.5 7.38998V9.26498C12.5 9.79405 12.0916 10.2025 11.5625 10.2025H6.5625C6.03344 10.2025 5.625 9.79405 5.625 9.26498V7.38998C5.625 6.86092 6.03344 6.45248 6.5625 6.45248ZM18.4375 6.45248H23.4375C23.9666 6.45248 24.375 6.86092 24.375 7.38998V15.515C24.375 16.044 23.9666 16.4525 23.4375 16.4525H18.4375C17.9084 16.4525 17.5 16.044 17.5 15.515V7.38998C17.5 6.86092 17.9084 6.45248 18.4375 6.45248ZM6.5625 13.3275C5.02031 13.3275 3.75 14.5978 3.75 16.14V24.265C3.75 25.8072 5.02031 27.0775 6.5625 27.0775H11.5625C13.1047 27.0775 14.375 25.8072 14.375 24.265V16.14C14.375 14.5978 13.1047 13.3275 11.5625 13.3275H6.5625ZM6.5625 15.2025H11.5625C12.0916 15.2025 12.5 15.6109 12.5 16.14V24.265C12.5 24.794 12.0916 25.2025 11.5625 25.2025H6.5625C6.03344 25.2025 5.625 24.794 5.625 24.265V16.14C5.625 15.6109 6.03344 15.2025 6.5625 15.2025ZM18.4375 19.5775C16.8953 19.5775 15.625 20.8478 15.625 22.39V24.265C15.625 25.8072 16.8953 27.0775 18.4375 27.0775H23.4375C24.9797 27.0775 26.25 25.8072 26.25 24.265V22.39C26.25 20.8478 24.9797 19.5775 23.4375 19.5775H18.4375ZM18.4375 21.4525H23.4375C23.9666 21.4525 24.375 21.8609 24.375 22.39V24.265C24.375 24.794 23.9666 25.2025 23.4375 25.2025H18.4375C17.9084 25.2025 17.5 24.794 17.5 24.265V22.39C17.5 21.8609 17.9084 21.4525 18.4375 21.4525Z"
  />
</svg>
`},
  {title : "دوره های من" , path:"/myCourses" , svg : ` <svg
  class="sidebar-icon size-7.5 fill-current shrink-0"
  viewBox="0 0 30 31"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.125 4.57748C5.46196 4.57748 4.82607 4.84088 4.35723 5.30972C3.88839 5.77856 3.625 6.41444 3.625 7.07748C3.625 7.74053 3.88839 8.37641 4.35723 8.84525C4.82607 9.31409 5.46196 9.57748 6.125 9.57748C6.78804 9.57748 7.42393 9.31409 7.89277 8.84525C8.36161 8.37641 8.625 7.74053 8.625 7.07748C8.625 6.41444 8.36161 5.77856 7.89277 5.30972C7.42393 4.84088 6.78804 4.57748 6.125 4.57748ZM8.91431 4.57748C9.37743 5.09373 9.69885 5.73811 9.81885 6.45248H24.25V18.3275H9.875V20.2025H26.4375C26.955 20.2025 27.375 19.7831 27.375 19.265C27.375 18.7469 26.955 18.3275 26.4375 18.3275H26.125V5.51498C26.125 4.99686 25.705 4.57748 25.1875 4.57748H8.91431ZM4.875 10.8275C3.83938 10.8275 3 11.6669 3 12.7025V20.2025H8.625V12.7025H15.1875C15.3117 12.7042 15.4351 12.6813 15.5504 12.635C15.6656 12.5886 15.7706 12.5199 15.859 12.4326C15.9475 12.3454 16.0178 12.2415 16.0657 12.1268C16.1137 12.0122 16.1384 11.8892 16.1384 11.765C16.1384 11.6407 16.1137 11.5177 16.0657 11.4031C16.0178 11.2885 15.9475 11.1846 15.859 11.0973C15.7706 11.0101 15.6656 10.9413 15.5504 10.895C15.4351 10.8487 15.3117 10.8257 15.1875 10.8275H8.625H5.5H4.875ZM5.5 22.0775C4.83696 22.0775 4.20107 22.3409 3.73223 22.8097C3.26339 23.2786 3 23.9144 3 24.5775C3 25.2405 3.26339 25.8764 3.73223 26.3453C4.20107 26.8141 4.83696 27.0775 5.5 27.0775C6.16304 27.0775 6.79893 26.8141 7.26777 26.3453C7.73661 25.8764 8 25.2405 8 24.5775C8 23.9144 7.73661 23.2786 7.26777 22.8097C6.79893 22.3409 6.16304 22.0775 5.5 22.0775ZM11.75 22.0775C11.087 22.0775 10.4511 22.3409 9.98223 22.8097C9.51339 23.2786 9.25 23.9144 9.25 24.5775C9.25 25.2405 9.51339 25.8764 9.98223 26.3453C10.4511 26.8141 11.087 27.0775 11.75 27.0775C12.413 27.0775 13.0489 26.8141 13.5178 26.3453C13.9866 25.8764 14.25 25.2405 14.25 24.5775C14.25 23.9144 13.9866 23.2786 13.5178 22.8097C13.0489 22.3409 12.413 22.0775 11.75 22.0775ZM18 22.0775C17.337 22.0775 16.7011 22.3409 16.2322 22.8097C15.7634 23.2786 15.5 23.9144 15.5 24.5775C15.5 25.2405 15.7634 25.8764 16.2322 26.3453C16.7011 26.8141 17.337 27.0775 18 27.0775C18.663 27.0775 19.2989 26.8141 19.7678 26.3453C20.2366 25.8764 20.5 25.2405 20.5 24.5775C20.5 23.9144 20.2366 23.2786 19.7678 22.8097C19.2989 22.3409 18.663 22.0775 18 22.0775ZM24.25 22.0775C23.587 22.0775 22.9511 22.3409 22.4822 22.8097C22.0134 23.2786 21.75 23.9144 21.75 24.5775C21.75 25.2405 22.0134 25.8764 22.4822 26.3453C22.9511 26.8141 23.587 27.0775 24.25 27.0775C24.913 27.0775 25.5489 26.8141 26.0178 26.3453C26.4866 25.8764 26.75 25.2405 26.75 24.5775C26.75 23.9144 26.4866 23.2786 26.0178 22.8097C25.5489 22.3409 24.913 22.0775 24.25 22.0775Z"
  />
</svg>`},
  {title : "بسته های آموزش های من" , path:"/myPackages" , svg : ` <svg
  class="sidebar-icon size-7.5 fill-current shrink-0"
  viewBox="0 0 30 31"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.8125 4.57748C4.27031 4.57748 3 5.8478 3 7.38998V24.265C3 25.8072 4.27031 27.0775 5.8125 27.0775H9.5625C10.2862 27.0775 10.9367 26.7806 11.4375 26.3243C11.9383 26.7806 12.5888 27.0775 13.3125 27.0775H16.4375C17.1612 27.0775 17.8117 26.7806 18.3125 26.3243C18.8133 26.7806 19.4638 27.0775 20.1875 27.0775H23.9375C25.4797 27.0775 26.75 25.8072 26.75 24.265V7.38998C26.75 5.8478 25.4797 4.57748 23.9375 4.57748H20.1875C18.6453 4.57748 17.375 5.8478 17.375 7.38998V8.51913C17.0784 8.41159 16.7691 8.32748 16.4375 8.32748H13.3125C12.9809 8.32748 12.6715 8.41159 12.375 8.51913V7.38998C12.375 5.8478 11.1047 4.57748 9.5625 4.57748H5.8125ZM5.8125 6.45248H9.5625C10.0916 6.45248 10.5 6.86092 10.5 7.38998V11.14V24.265C10.5 24.794 10.0916 25.2025 9.5625 25.2025H5.8125C5.28344 25.2025 4.875 24.794 4.875 24.265V7.38998C4.875 6.86092 5.28344 6.45248 5.8125 6.45248ZM20.1875 6.45248H23.9375C24.4666 6.45248 24.875 6.86092 24.875 7.38998V24.265C24.875 24.794 24.4666 25.2025 23.9375 25.2025H20.1875C19.6584 25.2025 19.25 24.794 19.25 24.265V11.14V7.38998C19.25 6.86092 19.6584 6.45248 20.1875 6.45248ZM7.67285 8.31406C7.42442 8.31794 7.18769 8.42027 7.01466 8.59856C6.84163 8.77686 6.74644 9.01655 6.75 9.26498V18.015C6.74824 18.1392 6.77119 18.2626 6.81752 18.3778C6.86384 18.4931 6.93262 18.598 7.01985 18.6865C7.10708 18.775 7.21102 18.8452 7.32564 18.8932C7.44025 18.9411 7.56326 18.9658 7.6875 18.9658C7.81174 18.9658 7.93475 18.9411 8.04936 18.8932C8.16398 18.8452 8.26792 18.775 8.35515 18.6865C8.44238 18.598 8.51115 18.4931 8.55748 18.3778C8.60381 18.2626 8.62676 18.1392 8.625 18.015V9.26498C8.6268 9.13951 8.60339 9.01494 8.55616 8.89868C8.50894 8.78241 8.43885 8.67681 8.35006 8.58813C8.26126 8.49945 8.15557 8.4295 8.03925 8.38242C7.92292 8.33534 7.79833 8.3121 7.67285 8.31406ZM22.0479 8.31406C21.7994 8.31794 21.5627 8.42027 21.3897 8.59856C21.2166 8.77686 21.1214 9.01655 21.125 9.26498V18.015C21.1232 18.1392 21.1462 18.2626 21.1925 18.3778C21.2388 18.4931 21.3076 18.598 21.3948 18.6865C21.4821 18.775 21.586 18.8452 21.7006 18.8932C21.8153 18.9411 21.9383 18.9658 22.0625 18.9658C22.1867 18.9658 22.3097 18.9411 22.4244 18.8932C22.539 18.8452 22.6429 18.775 22.7302 18.6865C22.8174 18.598 22.8862 18.4931 22.9325 18.3778C22.9788 18.2626 23.0018 18.1392 23 18.015V9.26498C23.0018 9.13951 22.9784 9.01494 22.9312 8.89868C22.8839 8.78241 22.8138 8.67681 22.7251 8.58813C22.6363 8.49945 22.5306 8.4295 22.4142 8.38242C22.2979 8.33534 22.1733 8.3121 22.0479 8.31406ZM13.3125 10.2025H16.4375C16.9666 10.2025 17.375 10.6109 17.375 11.14V24.265C17.375 24.794 16.9666 25.2025 16.4375 25.2025H13.3125C12.7834 25.2025 12.375 24.794 12.375 24.265V11.14C12.375 10.6109 12.7834 10.2025 13.3125 10.2025ZM14.5625 12.0775C14.4383 12.0757 14.3149 12.0987 14.1996 12.145C14.0844 12.1913 13.9794 12.2601 13.891 12.3473C13.8025 12.4346 13.7322 12.5385 13.6843 12.6531C13.6363 12.7677 13.6116 12.8907 13.6116 13.015C13.6116 13.1392 13.6363 13.2622 13.6843 13.3768C13.7322 13.4915 13.8025 13.5954 13.891 13.6826C13.9794 13.7699 14.0844 13.8386 14.1996 13.885C14.3149 13.9313 14.4383 13.9542 14.5625 13.9525H15.1875C15.3117 13.9542 15.4351 13.9313 15.5504 13.885C15.6656 13.8386 15.7706 13.7699 15.859 13.6826C15.9475 13.5954 16.0178 13.4915 16.0657 13.3768C16.1137 13.2622 16.1384 13.1392 16.1384 13.015C16.1384 12.8907 16.1137 12.7677 16.0657 12.6531C16.0178 12.5385 15.9475 12.4346 15.859 12.3473C15.7706 12.2601 15.6656 12.1913 15.5504 12.145C15.4351 12.0987 15.3117 12.0757 15.1875 12.0775H14.5625ZM7.0625 21.4525C6.93827 21.4507 6.81493 21.4737 6.69965 21.52C6.58436 21.5663 6.47944 21.6351 6.39097 21.7223C6.3025 21.8096 6.23224 21.9135 6.18429 22.0281C6.13634 22.1427 6.11165 22.2657 6.11165 22.39C6.11165 22.5142 6.13634 22.6372 6.18429 22.7518C6.23224 22.8665 6.3025 22.9704 6.39097 23.0576C6.47944 23.1449 6.58436 23.2136 6.69965 23.26C6.81493 23.3063 6.93827 23.3292 7.0625 23.3275H8.3125C8.43673 23.3292 8.56007 23.3063 8.67535 23.26C8.79064 23.2136 8.89556 23.1449 8.98403 23.0576C9.0725 22.9704 9.14276 22.8665 9.19071 22.7518C9.23866 22.6372 9.26335 22.5142 9.26335 22.39C9.26335 22.2657 9.23866 22.1427 9.19071 22.0281C9.14276 21.9135 9.0725 21.8096 8.98403 21.7223C8.89556 21.6351 8.79064 21.5663 8.67535 21.52C8.56007 21.4737 8.43673 21.4507 8.3125 21.4525H7.0625ZM14.5625 21.4525C14.4383 21.4507 14.3149 21.4737 14.1996 21.52C14.0844 21.5663 13.9794 21.6351 13.891 21.7223C13.8025 21.8096 13.7322 21.9135 13.6843 22.0281C13.6363 22.1427 13.6116 22.2657 13.6116 22.39C13.6116 22.5142 13.6363 22.6372 13.6843 22.7518C13.7322 22.8665 13.8025 22.9704 13.891 23.0576C13.9794 23.1449 14.0844 23.2136 14.1996 23.26C14.3149 23.3063 14.4383 23.3292 14.5625 23.3275H15.1875C15.3117 23.3292 15.4351 23.3063 15.5504 23.26C15.6656 23.2136 15.7706 23.1449 15.859 23.0576C15.9475 22.9704 16.0178 22.8665 16.0657 22.7518C16.1137 22.6372 16.1384 22.5142 16.1384 22.39C16.1384 22.2657 16.1137 22.1427 16.0657 22.0281C16.0178 21.9135 15.9475 21.8096 15.859 21.7223C15.7706 21.6351 15.6656 21.5663 15.5504 21.52C15.4351 21.4737 15.3117 21.4507 15.1875 21.4525H14.5625ZM21.4375 21.4525C21.3133 21.4507 21.1899 21.4737 21.0746 21.52C20.9594 21.5663 20.8544 21.6351 20.766 21.7223C20.6775 21.8096 20.6072 21.9135 20.5593 22.0281C20.5113 22.1427 20.4866 22.2657 20.4866 22.39C20.4866 22.5142 20.5113 22.6372 20.5593 22.7518C20.6072 22.8665 20.6775 22.9704 20.766 23.0576C20.8544 23.1449 20.9594 23.2136 21.0746 23.26C21.1899 23.3063 21.3133 23.3292 21.4375 23.3275H22.6875C22.8117 23.3292 22.9351 23.3063 23.0504 23.26C23.1656 23.2136 23.2706 23.1449 23.359 23.0576C23.4475 22.9704 23.5178 22.8665 23.5657 22.7518C23.6137 22.6372 23.6384 22.5142 23.6384 22.39C23.6384 22.2657 23.6137 22.1427 23.5657 22.0281C23.5178 21.9135 23.4475 21.8096 23.359 21.7223C23.2706 21.6351 23.1656 21.5663 23.0504 21.52C22.9351 21.4737 22.8117 21.4507 22.6875 21.4525H21.4375Z"
  />
</svg>`},
  {title : "تراکنش ها" , path:"/Transactions" , svg : `<svg
  class="sidebar-icon fill-current size-7.5 shrink-0"
  viewBox="0 0 30 31"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.59509 4.82788C6.36654 4.83058 6.14827 4.92327 5.98761 5.08583C5.82695 5.2484 5.73685 5.46774 5.73684 5.6963V23.3542C4.77753 23.3542 4 24.1317 4 25.091C4 26.0504 4.77753 26.8279 5.73684 26.8279H6.60526H7.47368H22.5263H23.3947H24.2632C25.2225 26.8279 26 26.0504 26 25.091C26 24.1317 25.2225 23.3542 24.2632 23.3542V5.6963C24.2631 5.53914 24.2204 5.38492 24.1397 5.2501C24.0589 5.11528 23.943 5.00491 23.8045 4.93075C23.6659 4.85659 23.5098 4.82142 23.3528 4.82899C23.1958 4.83656 23.0438 4.8866 22.913 4.97375L20.7646 6.40529L18.3414 4.95114C18.2065 4.87022 18.0521 4.82748 17.8947 4.82748C17.7374 4.82748 17.583 4.87022 17.4481 4.95114L15 6.41999L12.5519 4.95114C12.417 4.87022 12.2626 4.82748 12.1053 4.82748C11.9479 4.82748 11.7935 4.87022 11.6586 4.95114L9.2354 6.40529L7.08697 4.97375C6.94144 4.87671 6.76999 4.82586 6.59509 4.82788ZM12.1053 6.70946L14.5534 8.17718C14.6883 8.2581 14.8427 8.30084 15 8.30084C15.1573 8.30084 15.3117 8.2581 15.4466 8.17718L17.8947 6.70946L20.3428 8.17832C20.4838 8.26279 20.6459 8.3055 20.8103 8.3015C20.9746 8.2975 21.1344 8.24694 21.2712 8.1557L22.5263 7.31894V23.3542V25.091H7.47368V23.3542V7.31894L8.72882 8.1557C8.86556 8.24694 9.02539 8.2975 9.18972 8.3015C9.35406 8.3055 9.51616 8.26279 9.65718 8.17832L12.1053 6.70946ZM10.0789 11.1963C9.96387 11.1947 9.84962 11.2159 9.74283 11.2588C9.63604 11.3018 9.53885 11.3655 9.4569 11.4463C9.37494 11.5271 9.30987 11.6234 9.26545 11.7295C9.22103 11.8357 9.19816 11.9496 9.19816 12.0647C9.19816 12.1798 9.22103 12.2938 9.26545 12.3999C9.30987 12.5061 9.37494 12.6024 9.4569 12.6832C9.53885 12.764 9.63604 12.8277 9.74283 12.8706C9.84962 12.9135 9.96387 12.9348 10.0789 12.9331H19.9211C20.0361 12.9348 20.1504 12.9135 20.2572 12.8706C20.364 12.8277 20.4612 12.764 20.5431 12.6832C20.6251 12.6024 20.6901 12.5061 20.7346 12.3999C20.779 12.2938 20.8018 12.1798 20.8018 12.0647C20.8018 11.9496 20.779 11.8357 20.7346 11.7295C20.6901 11.6234 20.6251 11.5271 20.5431 11.4463C20.4612 11.3655 20.364 11.3018 20.2572 11.2588C20.1504 11.2159 20.0361 11.1947 19.9211 11.1963H10.0789ZM10.0789 15.8279C9.96387 15.8263 9.84962 15.8475 9.74283 15.8904C9.63604 15.9333 9.53885 15.997 9.4569 16.0778C9.37494 16.1587 9.30987 16.2549 9.26545 16.3611C9.22103 16.4673 9.19816 16.5812 9.19816 16.6963C9.19816 16.8114 9.22103 16.9253 9.26545 17.0315C9.30987 17.1377 9.37494 17.234 9.4569 17.3148C9.53885 17.3956 9.63604 17.4593 9.74283 17.5022C9.84962 17.5451 9.96387 17.5664 10.0789 17.5647H15.2895C15.4045 17.5664 15.5188 17.5451 15.6256 17.5022C15.7324 17.4593 15.8296 17.3956 15.9115 17.3148C15.9935 17.234 16.0586 17.1377 16.103 17.0315C16.1474 16.9253 16.1703 16.8114 16.1703 16.6963C16.1703 16.5812 16.1474 16.4673 16.103 16.3611C16.0586 16.2549 15.9935 16.1587 15.9115 16.0778C15.8296 15.997 15.7324 15.9333 15.6256 15.8904C15.5188 15.8475 15.4045 15.8263 15.2895 15.8279H10.0789ZM18.7632 15.8279C18.6481 15.8263 18.5338 15.8475 18.427 15.8904C18.3203 15.9333 18.2231 15.997 18.1411 16.0778C18.0592 16.1587 17.9941 16.2549 17.9497 16.3611C17.9052 16.4673 17.8824 16.5812 17.8824 16.6963C17.8824 16.8114 17.9052 16.9253 17.9497 17.0315C17.9941 17.1377 18.0592 17.234 18.1411 17.3148C18.2231 17.3956 18.3203 17.4593 18.427 17.5022C18.5338 17.5451 18.6481 17.5664 18.7632 17.5647H19.9211C20.0361 17.5664 20.1504 17.5451 20.2572 17.5022C20.364 17.4593 20.4612 17.3956 20.5431 17.3148C20.6251 17.234 20.6901 17.1377 20.7346 17.0315C20.779 16.9253 20.8018 16.8114 20.8018 16.6963C20.8018 16.5812 20.779 16.4673 20.7346 16.3611C20.6901 16.2549 20.6251 16.1587 20.5431 16.0778C20.4612 15.997 20.364 15.9333 20.2572 15.8904C20.1504 15.8475 20.0361 15.8263 19.9211 15.8279H18.7632ZM10.0789 19.3016C9.96387 19.2999 9.84962 19.3212 9.74283 19.3641C9.63604 19.407 9.53885 19.4707 9.4569 19.5515C9.37494 19.6323 9.30987 19.7286 9.26545 19.8348C9.22103 19.941 9.19816 20.0549 9.19816 20.17C9.19816 20.2851 9.22103 20.399 9.26545 20.5052C9.30987 20.6114 9.37494 20.7076 9.4569 20.7884C9.53885 20.8692 9.63604 20.933 9.74283 20.9759C9.84962 21.0188 9.96387 21.04 10.0789 21.0384H14.1316C14.2467 21.04 14.3609 21.0188 14.4677 20.9759C14.5745 20.933 14.6717 20.8692 14.7536 20.7884C14.8356 20.7076 14.9007 20.6114 14.9451 20.5052C14.9895 20.399 15.0124 20.2851 15.0124 20.17C15.0124 20.0549 14.9895 19.941 14.9451 19.8348C14.9007 19.7286 14.8356 19.6323 14.7536 19.5515C14.6717 19.4707 14.5745 19.407 14.4677 19.3641C14.3609 19.3212 14.2467 19.2999 14.1316 19.3016H10.0789ZM18.7632 19.3016C18.6481 19.2999 18.5338 19.3212 18.427 19.3641C18.3203 19.407 18.2231 19.4707 18.1411 19.5515C18.0592 19.6323 17.9941 19.7286 17.9497 19.8348C17.9052 19.941 17.8824 20.0549 17.8824 20.17C17.8824 20.2851 17.9052 20.399 17.9497 20.5052C17.9941 20.6114 18.0592 20.7076 18.1411 20.7884C18.2231 20.8692 18.3203 20.933 18.427 20.9759C18.5338 21.0188 18.6481 21.04 18.7632 21.0384H19.9211C20.0361 21.04 20.1504 21.0188 20.2572 20.9759C20.364 20.933 20.4612 20.8692 20.5431 20.7884C20.6251 20.7076 20.6901 20.6114 20.7346 20.5052C20.779 20.399 20.8018 20.2851 20.8018 20.17C20.8018 20.0549 20.779 19.941 20.7346 19.8348C20.6901 19.7286 20.6251 19.6323 20.5431 19.5515C20.4612 19.4707 20.364 19.407 20.2572 19.3641C20.1504 19.3212 20.0361 19.2999 19.9211 19.3016H18.7632Z"
  />
</svg>`},
  {title : "پشتیبانی" , path:"/support" , svg : ` <svg
  class="sidebar-icon fill-current size-7.5 shrink-0"
  viewBox="0 0 30 31"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M15.5467 4.58778C10.3321 4.34231 6 8.51852 6 13.6845V16.0953V19.8453C6 21.3842 7.21384 22.6259 8.72358 22.7467C8.84637 24.8481 10.5658 26.5418 12.6965 26.5418H13.2395C13.4843 26.8649 13.8681 27.0775 14.3036 27.0775H15.9108C16.649 27.0775 17.2501 26.4769 17.2501 25.7382C17.2501 24.9994 16.649 24.3989 15.9108 24.3989H14.3036C13.8681 24.3989 13.4843 24.6115 13.2395 24.9346H12.6965C11.4506 24.9346 10.4765 23.9981 10.3391 22.7917H11.625C11.8382 22.7917 12.0425 22.707 12.1932 22.5564C12.3439 22.4057 12.4286 22.2013 12.4286 21.9882V16.0953C12.4286 15.8821 12.3439 15.6778 12.1932 15.5271C12.0425 15.3764 11.8382 15.2917 11.625 15.2917H7.60715V13.6845C7.60715 9.41225 11.148 5.98938 15.4703 6.19284C19.4959 6.38212 22.6073 9.8595 22.6073 13.9189V15.2917H18.5894C18.3763 15.2917 18.1719 15.3764 18.0212 15.5271C17.8705 15.6778 17.7858 15.8821 17.7858 16.0953V21.9882C17.7858 22.2013 17.8705 22.4057 18.0212 22.5564C18.1719 22.707 18.3763 22.7917 18.5894 22.7917H21.268C22.8857 22.7917 24.2144 21.463 24.2144 19.8453V16.0953V13.9189C24.2144 9.03609 20.4536 4.8185 15.5467 4.58778ZM7.60715 16.8988H10.8215V21.1846H8.94645C8.1974 21.1846 7.60715 20.5943 7.60715 19.8453V16.8988ZM19.393 16.8988H22.6073V19.8453C22.6073 20.5943 22.017 21.1846 21.268 21.1846H19.393V16.8988Z"
  />
</svg>`},
  
]
}
