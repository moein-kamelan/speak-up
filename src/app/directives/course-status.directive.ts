import {
    Directive,
    ElementRef,
    Input,
    Renderer2,
    OnInit
  } from '@angular/core';
  
  @Directive({
    selector: '[appCourseStatus]'
  })
  export class CourseStatusDirective implements OnInit {
  
    @Input() appCourseStatus: string = '';
  
    constructor(private el: ElementRef, private renderer: Renderer2) {}
  
    ngOnInit(): void {
        console.log(this.appCourseStatus);
        
  
      // سپس برای هر وضعیت استایل‌های مختلف رو اضافه کن
      switch (this.appCourseStatus) {
        case 'در حال برگزاری':
          this.renderer.addClass(this.el.nativeElement, '!text-main-blue');
          this.renderer.addClass(this.el.nativeElement, '!bg-light-blue');
          console.log(this.appCourseStatus);
          
          break;
        case 'در انتظار برگزاری':
          this.renderer.addClass(this.el.nativeElement, '!bg-[#F0FFF8]');
          this.renderer.addClass(this.el.nativeElement, '!text-[#0EB465]');
          break;
        case 'در انتظار تکمیل ظرفیت':
          this.renderer.addClass(this.el.nativeElement, 'bg-[#FFFCF2]');
          this.renderer.addClass(this.el.nativeElement, '!text-[#F8B604]');
          break;
        case 'پایان یافته':
          this.renderer.addClass(this.el.nativeElement, '!bg-[#FFF2F4]');
          this.renderer.addClass(this.el.nativeElement, '!text-[#FF233D]');
          break;
      }
    }
  }
  