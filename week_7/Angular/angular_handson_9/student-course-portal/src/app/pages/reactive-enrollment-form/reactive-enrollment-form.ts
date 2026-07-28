import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../../guards/can-deactivate';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrls: ['./reactive-enrollment-form.css']
})

export class ReactiveEnrollmentForm implements CanComponentDeactivate {

  enrollForm!: FormGroup;
  dirty = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm.valueChanges.subscribe(() => {
      this.dirty = true;
    });

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],

      studentEmail: this.fb.control(
        '',
        [Validators.required, Validators.email],
        [this.simulateEmailCheck]
      ),

      courseId: [
        '',
        [Validators.required, this.noCourseCode]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array<FormControl>([])

    });

  }

  canDeactivate(): boolean {
    if (!this.enrollForm) {
      return true;
    }

    if (!this.dirty && !this.enrollForm.dirty) {
      return true;
    }

    return confirm('You have unsaved changes. Leave this page?');
  }

  noCourseCode(control: AbstractControl): ValidationErrors | null {

    const value = control.value;

    if (value && value.startsWith('XX')) {
      return { noCourseCode: true };
    }

    return null;

  }

  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {

    return new Promise(resolve => {

      setTimeout(() => {

        if (control.value?.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }

      }, 800);

    });

  }

  get additionalCourses(): FormArray<FormControl> {
    return this.enrollForm?.get('additionalCourses') as FormArray<FormControl>;
  }

  addCourse() {
    this.additionalCourses.push(
      new FormControl<string>('', {
        nonNullable: true,
        validators: Validators.required
      })
    );
  }

  removeCourse(index: number) {
    this.additionalCourses.removeAt(index);
  }

  onSubmit() {
    if (this.enrollForm) {
      console.log('value =', this.enrollForm.value);
      console.log('raw value =', this.enrollForm.getRawValue());
      this.dirty = false;
    }
  }

  

  /*
    value
    Excludes disabled controls.

    getRawValue()
    Includes disabled controls.
    */
}