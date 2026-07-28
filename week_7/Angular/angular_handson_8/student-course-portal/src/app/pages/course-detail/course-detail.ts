import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { switchMap, map } from 'rxjs/operators';

import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrls: ['./course-detail.css']
})
export class CourseDetail implements OnInit {

  course?: Course;
  studentIds: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {

  this.route.paramMap.pipe(

    map(params => Number(params.get('id'))),

    switchMap(courseId =>

      this.courseService.getCourseById(courseId).pipe(

        map(course => {
          this.course = course;
          return courseId;
        }),

        // switchMap cancels the previous HTTP request if
        // a new course is selected before the previous
        // request completes, preventing outdated responses.
        switchMap(id =>
          this.enrollmentService.getStudentsByCourse(id)
        )

      )

    )

  ).subscribe(studentIds => {

    this.studentIds = [...studentIds];

    console.log('Student IDs:', this.studentIds);

  });

}

}