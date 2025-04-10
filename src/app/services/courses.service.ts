import { Injectable } from '@angular/core';
import { Course } from '../models/courses';
import { BehaviorSubject, Subject } from 'rxjs';
import { CourseStatus } from '../course-status';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  courses:Course[]  = [
    {
      id: Math.random() * 10000,
      img: "/images/courses-images/course-img1.png",
      title: "Big English 4",
      level: "A2",
      term: "A1 a",
      startTime: new Date("2023-12-3"),
      members: 12,
      status : CourseStatus.Finished ,
      date: new Date("2018-01-23"),
      hour: "12:00"
    },
    {
      id: Math.random() * 10000,
      img: "/images/courses-images/course-img2.png",
      title: "Big English 2",
      level: "A1",
      term: "A2 b",
      startTime: new Date("2024-3-2"),
      members: 8,
      status : CourseStatus.InProgress ,
      date: new Date("2020-01-23"),
      hour: "11:32 "
    },
    {
      id: Math.random() * 10000,
      img: "/images/courses-images/course-img3.png",
      title: "Big English 5",
      level: "A2",
      term: "A1 a",
      startTime: new Date("2023-01-04"),
      members: 2,
      status : CourseStatus.WaitingForCapacity , 
      date: new Date("2021-03-04"),
      hour: "08:34"
    },
    {
      id: Math.random() * 10000,
      img: "/images/courses-images/course-img1.png",
      title: "Big English 3",
      level: "A2",
      term: "A1 g",
      startTime: new Date("2022-08-07"),
      members: 3,
      status : CourseStatus.WaitingToStart ,
      date: new Date("2020-01-23"),
      hour: "02:00"
    },
  ]
  coursesSubject = new BehaviorSubject<Course[]>(this.courses)

  constructor() { }

  
  
  getAllCourses() {
    return this.coursesSubject
  }

  deleteCoure(id:number) {
    const currentCourses = this.coursesSubject.getValue();
    const updatedCourses = currentCourses.filter(course => course.id !== id);
    this.coursesSubject.next(updatedCourses);
  }

  createCourse(course:Course) {
    const newCourse = {id: Math.random() * 10000 , ...course}
    this.courses?.push(newCourse)
    this.coursesSubject.next(this.courses!)
  }

  updateCourse(updatedCourse: Course) {
    
    if (this.courses) {
      this.courses = this.courses.map(course =>
        course.id === updatedCourse.id ? updatedCourse : course
      );
    } else {
      console.warn('courses is null, cannot update');
    }
    this.coursesSubject.next(this.courses!)
  }
  
}
