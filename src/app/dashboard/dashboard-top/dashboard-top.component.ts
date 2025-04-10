import { Component } from '@angular/core';
import { DashboardTopCourseComponent } from './dashboard-top-course/dashboard-top-course.component';
import { DashboardTopCalendarComponent } from './dashboard-top-calendar/dashboard-top-calendar.component';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/courses';
import { CourseStatus } from '../../course-status';

@Component({
  selector: 'app-dashboard-top',
  imports: [DashboardTopCourseComponent, DashboardTopCalendarComponent, CommonModule],
  templateUrl: './dashboard-top.component.html',
  styleUrl: './dashboard-top.component.css'
})
export class DashboardTopComponent {
  courses: Course[] = [
    {
      id: Math.random() * 10000,
      img: "/images/courses-images/course-img1.png",
      title: "Big English 4",
      level: "A2",
      term: "A1 a",
      startTime: new Date("2022-04-01"),
      members: 32,
      status: CourseStatus.Finished,
      date: new Date("2017-08-02"),
      hour: "ساعت 12:00"

    },]
}
