import { Directive, ElementRef, Input, OnChanges, SimpleChange } from '@angular/core';

@Directive({
  selector: '[appCourseStatus]'
})
export class CourseStatusDirective  {
  // @Input() appCourseStatus: string = "";

  // private statusStyles = {
  //   'در حال برگزاری': {
  //     textColor: '!text-main-blue',
  //     bgColor: 'bg-light-blue'
  //   },
  //   'در انتظار برگزاری': {
  //     textColor: '!text-[#0EB465]',
  //     bgColor: 'bg-[#F0FFF8]'
  //   },
  //   'در انتظار تکمیل ظرفیت': {
  //     textColor: '!text-[#F8B604]',
  //     bgColor: 'bg-[#FFFCF2]'
  //   },
  //   'پایان یافته': {
  //     textColor: '!text-[#FF233D]',
  //     bgColor: 'bg-[#FFF2F4]'
  //   },
  //   default: {
  //     textColor: '!text-main-blue',
  //     bgColor: 'bg-light-blue'
  //   }
  // };

  // private baseClasses = 'rounded-sm py-2 px-1 font-iranSansDemiBold max-xl:text-sm';

  // constructor(private el:ElementRef) { }

  // ngOnChanges(changes: SimpleChange): void {
  //   if (changes.appCourseStatus) {
  //     this.applyStyles();
  //   }
  // }

  // private applyStyles(): void {
  //   const status = this.appCourseStatus;
  //   const styleConfig = this.statusStyles[status] || this.statusStyles.default;

  //   // حذف کلاس‌های قبلی
  //   Object.values(this.statusStyles).forEach(style => {
  //     this.el.nativeElement.classList.remove(style.textColor, style.bgColor);
  //   });

  //   // اضافه کردن کلاس‌های جدید
  //   this.el.nativeElement.className = `
  //     myCourses-card-desktop__status 
  //     ${styleConfig.textColor} 
  //     ${styleConfig.bgColor} 
  //     ${this.baseClasses}
  //   `;
  // }
  
  
}
