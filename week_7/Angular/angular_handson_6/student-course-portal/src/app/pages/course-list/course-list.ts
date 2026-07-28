import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css']
})
export class CourseList implements OnInit {

  isLoading = true;

  selectedCourseId = 0;

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.courses = this.courseService.getCourses();

    //setTimeout(() => {
      //this.isLoading = false;
   // }, 1500);
   this.isLoading = false;

  }

  onEnroll(id: number) {
    this.selectedCourseId = id;
  }

  trackByCourseId(index: number, course: Course) {
    return course.id;
  }

}