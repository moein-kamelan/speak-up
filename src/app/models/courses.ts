import { CourseStatus } from "../course-status";

export interface Course {
  id?: number,
  img: string,
  title: string,
  level: string,
  term: string,
  startTime: string,
  members: string,
  status: CourseStatus,
  date: string,
  hour: string,
}
