import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;
  enrolledIds$: Observable<number[]>;

  constructor(private store: Store) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  // Logs the previous and current value of `course` whenever the @Input changes.
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('course changed:', changes['course'].previousValue, '->', changes['course'].currentValue);
    }
  }

  get cardClasses() {
    // A getter keeps the template free of inline object literals, which
    // improves readability and keeps change-detection expressions simple.
    return {
      'card--enrolled': false,
      'card--full': this.course?.credits >= 4,
      expanded: this.isExpanded,
    };
  }

  get borderStyle() {
    const colors: Record<Course['gradeStatus'], string> = {
      passed: 'green',
      failed: 'red',
      pending: 'grey',
    };
    return { 'border-left-color': colors[this.course.gradeStatus] };
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnrollClick(): void {
    this.enrollRequested.emit(this.course.id);
    this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
  }

  onUnenrollClick(): void {
    this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
  }
}
