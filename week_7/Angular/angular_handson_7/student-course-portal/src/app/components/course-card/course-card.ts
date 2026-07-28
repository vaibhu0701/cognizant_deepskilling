import {
Component,
Input,
Output,
EventEmitter,
SimpleChanges,
OnChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
selector:'app-course-card',
imports:[CommonModule,CreditLabelPipe],
templateUrl:'./course-card.html',
styleUrl:'./course-card.css'
})

export class CourseCard implements OnChanges{

@Input()

course:any;

@Output()

enrollRequested=new EventEmitter<number>();

isExpanded=false;

ngOnChanges(changes:SimpleChanges){

console.log(changes);

}

toggleDetails(){

this.isExpanded=!this.isExpanded;

}

constructor(private enrollmentService: EnrollmentService) {}

// Getter keeps template clean.
get cardClasses(){

return{

'card--enrolled':this.course.enrolled,

'card--full':this.course.credits>=4,

'expanded':this.isExpanded

};

}

toggleEnrollment() {

  if (this.enrollmentService.isEnrolled(this.course.id)) {

    this.enrollmentService.unenroll(this.course.id);

  } else {

    this.enrollmentService.enroll(this.course.id);

  }

}

isEnrolled() {

  return this.enrollmentService.isEnrolled(this.course.id);

}

}
