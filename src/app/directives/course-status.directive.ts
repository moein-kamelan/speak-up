import {
    Directive,
    ElementRef,
    Input,
    Renderer2,
    OnInit,
    OnChanges,
    SimpleChanges
  } from '@angular/core';
  
  @Directive({
    selector: '[appCourseStatus]'
  })
  export class CourseStatusDirective implements OnInit, OnChanges {
  
    @Input() appCourseStatus: string = '';
  
    constructor(private el: ElementRef, private renderer: Renderer2) {}
  
    ngOnInit(): void {
      this.updateClass();
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      if (changes['appCourseStatus']) {
        this.updateClass();
      }
    }
  
    private updateClass() {
      // اول تمام کلاس‌های مربوط به وضعیت‌های قبلی رو حذف کنیم:
      const allStatusClasses = [
        '!text-main-blue', '!bg-light-blue',
        '!bg-[#F0FFF8]', '!text-[#0EB465]',
        'bg-[#FFFCF2]', '!text-[#F8B604]',
        '!bg-[#FFF2F4]', '!text-[#FF233D]'
      ];
      allStatusClasses.forEach(cls => this.renderer.removeClass(this.el.nativeElement, cls));
  
      // حالا کلاس مربوط به وضعیت جدید رو اضافه کن:
      switch (this.appCourseStatus) {
        case 'در حال برگزاری':
          this.renderer.addClass(this.el.nativeElement, '!text-main-blue');
          this.renderer.addClass(this.el.nativeElement, '!bg-light-blue');
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
  