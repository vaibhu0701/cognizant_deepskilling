import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  selectedCourseId = 0;

  courses = [
    { id: 1, name: 'Angular', code: 'ANG101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Java', code: 'JAVA201', credits: 3, gradeStatus: 'failed' },
    { id: 3, name: 'Python', code: 'PY301', credits: 2, gradeStatus: 'pending' },
    { id: 4, name: 'React', code: 'RE101', credits: 2, gradeStatus: 'passed' },
    { id: 5, name: 'SQL', code: 'SQL101', credits: 3, gradeStatus: 'pending' }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(id: number) {
    this.selectedCourseId = id;
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }
}