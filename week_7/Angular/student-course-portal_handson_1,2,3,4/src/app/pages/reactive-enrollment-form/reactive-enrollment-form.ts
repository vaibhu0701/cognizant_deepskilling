import { Component } from '@angular/core';
import {
FormBuilder,
FormGroup,
ReactiveFormsModule,
Validators,
FormArray,
AbstractControl,
ValidationErrors
} from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
selector:'app-reactive-enrollment-form',
imports:[
CommonModule,
ReactiveFormsModule
],
templateUrl:'./reactive-enrollment-form.html',
styleUrl:'./reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm{

enrollForm:FormGroup;

constructor(private fb:FormBuilder){

this.enrollForm=this.fb.group({

studentName:[
'',
[
Validators.required,
Validators.minLength(3)
]
],

studentEmail:[
'',
[
Validators.required,
Validators.email
]
],

courseId:[
'',
[
Validators.required,
this.noCourseCode
]
],

preferredSemester:[
'Odd',
Validators.required
],

agreeToTerms:[
false,
Validators.requiredTrue
],

additionalCourses:this.fb.array([])

});

}

noCourseCode(control:AbstractControl):ValidationErrors|null{

if(control.value?.toString().startsWith('XX')){

return{
noCourseCode:true
};

}

return null;

}

get additionalCourses(){

return this.enrollForm.get('additionalCourses') as FormArray;

}

addCourse(){

this.additionalCourses.push(

this.fb.control('',Validators.required)

);

}

removeCourse(i:number){

this.additionalCourses.removeAt(i);

}

submit(){

console.log(this.enrollForm.value);

console.log(this.enrollForm.getRawValue());

}

}