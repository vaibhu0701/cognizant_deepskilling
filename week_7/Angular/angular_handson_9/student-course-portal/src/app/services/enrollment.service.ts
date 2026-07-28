import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Enrollment {
  id: number;
  courseId: number;
  studentId: number;
}

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourseIds: number[] = [];

  constructor(private http: HttpClient) {}

  enroll(courseId: number): void {

    console.log('Enrolled:', courseId);

    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }

    console.log(this.enrolledCourseIds);

  }

  unenroll(courseId: number): void {

    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(id => id !== courseId);

  }

  isEnrolled(courseId: number): boolean {

    return this.enrolledCourseIds.includes(courseId);

  }

  getEnrolledCourses(): number[] {

    return this.enrolledCourseIds;

  }

  getStudentsByCourse(courseId: number): Observable<number[]> {

    return this.http
      .get<Enrollment[]>('http://localhost:3000/enrollments')
      .pipe(

        map(enrollments =>
          enrollments
            .filter(e => e.courseId === courseId)
            .map(e => e.studentId)
        )

      );

  }

}