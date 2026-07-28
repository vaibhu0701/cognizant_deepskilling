import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { Notification } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  FormsModule,
  CourseSummaryWidget,
  Notification],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  coursesAvailable = 12;

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }


  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  constructor(private courseService: CourseService) {}

  totalCourses = 0;

  ngOnInit() {

    this.courseService.getCourses().subscribe(data => {
        this.totalCourses = data.length;
    });

}
}

