import { CourseStatus } from "../course-status";

export interface Course {
  id?: number,
  img: string,
  title: string,
  level: string,
  term: string,
  startTime: Date,
  members: number,
  status: CourseStatus,
  date: Date,
  hour: string,
}
