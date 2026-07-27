import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';

  // Two-way binding target — [(ngModel)] is shorthand for
  // [ngModel]="searchTerm" (ngModelChange)="searchTerm = $event".
  searchTerm = '';

  coursesAvailable = 12;
  enrolled = 3;
  gpa = 3.8;

  constructor(private courseService: CourseService) {}

  // ngOnInit fires once after inputs are set — the right place for data
  // fetching, unlike the constructor which runs before inputs exist.
  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
    this.courseService.getCourses().subscribe({
      next: (courses) => (this.coursesAvailable = courses.length),
      error: () => {
        /* keep the hardcoded fallback stat if the API is unavailable */
      },
    });
  }

  // Critical for unsubscribing from Observables / clearing timers in a real
  // app to avoid memory leaks in a long-running SPA.
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
