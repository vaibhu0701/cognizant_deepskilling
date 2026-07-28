import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrls: ['./course-list.css']
})

export class CourseList implements OnInit {

  isLoading = true;

  selectedCourseId = 0;

  courses: Course[] = [];

  searchTerm = '';


  constructor(
  private courseService: CourseService,
  private router: Router,
  private route: ActivatedRoute){}

  ngOnInit(): void {

    this.courses = this.courseService.getCourses();

    //setTimeout(() => {
      //this.isLoading = false;
   // }, 1500);
   this.isLoading = false;
   this.searchTerm =
   this.route.snapshot.queryParamMap.get('search') ?? '';

  }

  onEnroll(id: number) {
  this.selectedCourseId = id;
}

  viewCourse(course: Course) {

  this.router.navigate(['courses', course.id]);

}

  trackByCourseId(index: number, course: Course) {
    return course.id;
  }

  search() {

  this.router.navigate(
    ['courses'],
    {
      queryParams:{
        search:this.searchTerm
      }
    }
  );

}
  

}
