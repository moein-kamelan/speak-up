// import {
//   Directive,
//   ElementRef,
//   Input,
//   OnChanges,
//   SimpleChanges,
//   Renderer2
// } from '@angular/core';

// @Directive({
//   selector: '[appCourseStatus]'
// })
// export class CourseStatusDirective implements OnChanges {
//   @Input() appCourseStatus: string = '';

//   private statusStyles = {
//     'در حال برگزاری': {
//       textColor: 'text-main-blue',
//       bgColor: 'bg-light-blue'
//     },
//     'در انتظار برگزاری': {
//       textColor: 'text-[#0EB465]',
//       bgColor: 'bg-[#F0FFF8]'
//     },
//     'در انتظار تکمیل ظرفیت': {
//       textColor: 'text-[#F8B604]',
//       bgColor: 'bg-[#FFFCF2]'
//     },
//     'پایان یافته': {
//       textColor: 'text-[#FF233D]',
//       bgColor: 'bg-[#FFF2F4]'
//     },
//     default: {
//       textColor: 'text-main-blue',
//       bgColor: 'bg-light-blue'
//     }
//   };

//   private baseClasses = [
//     'rounded-sm',
//     'py-2',
//     'px-1',
//     'font-iranSansDemiBold',
//     'max-xl:text-sm'
//   ];

//   constructor(private el: ElementRef, private renderer: Renderer2) {}

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['appCourseStatus']) {
//       this.applyStyles();
//     }
//   }

//   private applyStyles(): void {
//     const status = this.appCourseStatus;
//     const styleConfig = this.statusStyles[status] || this.statusStyles.default;

//     // حذف کلاس‌های قبلی
//     Object.values(this.statusStyles).forEach(style => {
//       this.renderer.removeClass(this.el.nativeElement, style.textColor);
//       this.renderer.removeClass(this.el.nativeElement, style.bgColor);
//     });

//     // اضافه کردن کلاس‌های جدید
//     this.renderer.addClass(this.el.nativeElement, 'myCourses-card-desktop__status');
//     this.renderer.addClass(this.el.nativeElement, styleConfig.textColor);
//     this.renderer.addClass(this.el.nativeElement, styleConfig.bgColor);

//     this.baseClasses.forEach(cls => this.renderer.addClass(this.el.nativeElement, cls));
//   }
// }
