import { Injectable } from '@angular/core';
import { Course } from '../models/courses';
import { BehaviorSubject, range, Subject } from 'rxjs';

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
      startTime: "1402/09/21",
      members: "10/10",
      status: "در حال برگزاری",
      date: "24 آذر ماه",
      hour: "ساعت 12:00"
    },
    {
      id: Math.random() * 10000,
      img: "/images/courses-images/course-img2.png",
      title: "Big English 2",
      level: "A1",
      term: "A2 b",
      startTime: "1402/11/03",
      members: "9/10",
      status: "در انتظار برگزاری",
      date: "24 بهمن ماه",
      hour: "ساعت 11:32 "
    },
    {
      id: Math.random() * 10000,
      img: "/images/courses-images/course-img3.png",
      title: "Big English 5",
      level: "A2",
      term: "A1 a",
      startTime: "1401/03/20",
      members: "7/10",
      status: "در انتظار تکمیل ظرفیت",
      date: "25 شهریور ماه",
      hour: "08:34 ساعت "
    },
    {
      id: Math.random() * 10000,
      img: "/images/courses-images/course-img1.png",
      title: "Big English 3",
      level: "A2",
      term: "A1 g",
      startTime: "1400/11/03",
      members: "4/10",
      status: "پایان یافته",
      date: "02 آبان ماه",
      hour: "02:00 ساعت "
    },
  ]
  coursesSubject = new BehaviorSubject<Course[]>(this.courses)


  
  
  getAllCourses() {
    return this.coursesSubject
  }

  deleteCoure(id:number) {

    this.courses = this.courses.filter(course => course.id !== id);
    this.coursesSubject.next(this.courses);
  }

  createCourse(course:Course) {
    const newCourse = {id: Math.random() * 10000 , ...course}
    this.courses.push(newCourse)
    this.coursesSubject.next(this.courses)
  }

  updateCourse(updatedCourse:Course) {
    this.courses = this.courses.map(course => {
      return course.id === updatedCourse.id ? updatedCourse : course
    })
    this.coursesSubject.next(this.courses)
  }
  constructor() { }
}
