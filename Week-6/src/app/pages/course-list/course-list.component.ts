import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  searchTerm = '';

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
    this.courses$ = this.store.select(selectAllCourses);
    this.isLoading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') ?? '';
  }

  // trackBy avoids re-rendering every card on unrelated array changes —
  // Angular only re-renders items whose tracked id actually changed.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onSearch(): void {
    this.router.navigate(['courses'], {
      queryParams: this.searchTerm ? { search: this.searchTerm } : {},
    });
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
  }

  openCourse(course: Course): void {
    this.router.navigate(['courses', course.id]);
  }
}
