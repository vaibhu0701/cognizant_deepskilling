import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CourseService } from '../../../../services/course.service';
import { CanComponentDeactivate } from '../../../../guards/unsaved-changes.guard';

// Custom synchronous validator: rejects course codes starting with 'XX'.
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (typeof value === 'string' && value.toUpperCase().startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css'],
})
export class ReactiveEnrollmentFormComponent implements OnInit, CanComponentDeactivate {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private courseService: CourseService) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: this.fb.control('', [Validators.required, Validators.email], [this.simulateEmailCheck]),
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([]),
    });
  }

  // Async validator: fires only after sync validators pass, to avoid
  // unnecessary "API calls" while the field is still obviously invalid.
  simulateEmailCheck = (control: AbstractControl): Promise<ValidationErrors | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(control.value?.includes('test@') ? { emailTaken: true } : null);
      }, 800);
    });
  };

  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourseControl(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    if (this.enrollForm.invalid) return;

    // .value excludes disabled controls; .getRawValue() includes everything.
    console.log('value:', this.enrollForm.value);
    console.log('getRawValue:', this.enrollForm.getRawValue());

    const { studentName, courseId } = this.enrollForm.value;
    this.courseService
      .createCourse({ name: studentName, code: String(courseId), credits: 3, gradeStatus: 'pending' })
      .subscribe({
        next: () => (this.submitted = true),
        error: (err) => console.error(err),
      });
  }

  // Implements CanComponentDeactivate for the unsavedChangesGuard.
  canDeactivate(): boolean {
    return !this.enrollForm.dirty || this.submitted;
  }
}
