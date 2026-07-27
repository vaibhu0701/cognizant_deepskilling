import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;
  students: { id: number; name: string }[] = [];
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    // snapshot.paramMap is fine here because navigating between two
    // /courses/:id URLs re-creates this component rather than reusing it.
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.courseService.getCourseById(id).subscribe({
      next: (course) => (this.course = course),
      error: (err) => (this.errorMessage = err.message),
    });

    // switchMap cancels the previous inner Observable if a new courseId
    // arrives before the first request completes, avoiding out-of-order
    // responses when the user quickly navigates between courses.
    this.route.paramMap
      .pipe(switchMap((params) => this.enrollmentService.getStudentsByCourse(Number(params.get('id')))))
      .subscribe((students) => (this.students = students));
  }
}
