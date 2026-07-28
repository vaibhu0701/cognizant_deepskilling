import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-summary-widget.html',
  styleUrls: ['./course-summary-widget.css']
})
export class CourseSummaryWidget {

  constructor(private courseService: CourseService) {}

  get count(): number {
    return this.courseService.getCourses().length;
  }

}