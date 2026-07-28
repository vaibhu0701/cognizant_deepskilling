import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

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

  courses = [
    {
      id:1,
      name:'Angular',
      code:'ANG101',
      credits:4,
      gradeStatus:'passed',
      enrolled:true
    },
    {
      id:2,
      name:'Java',
      code:'JAVA201',
      credits:3,
      gradeStatus:'failed',
      enrolled:false
    },
    {
      id:3,
      name:'Spring Boot',
      code:'SB301',
      credits:4,
      gradeStatus:'pending',
      enrolled:true
    },
    {
      id:4,
      name:'Database',
      code:'DB401',
      credits:2,
      gradeStatus:'passed',
      enrolled:false
    },
    {
      id:5,
      name:'Cloud',
      code:'CL501',
      credits:1,
      gradeStatus:'pending',
      enrolled:false
    }
  ];

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    },1500);

  }

  onEnroll(id:number){

    console.log("Enrolling in course : "+id);

    this.selectedCourseId=id;

  }

  // trackBy improves performance by reusing existing DOM elements.
  trackByCourseId(index:number,course:any){

    return course.id;

  }

}