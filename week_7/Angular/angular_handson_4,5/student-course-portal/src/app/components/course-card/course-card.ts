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

// Getter keeps template clean.
get cardClasses(){

return{

'card--enrolled':this.course.enrolled,

'card--full':this.course.credits>=4,

'expanded':this.isExpanded

};

}

}