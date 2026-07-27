import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

// The '[Course]' prefix groups actions by feature so the Redux DevTools
// timeline can be filtered to show only course-related actions.
export const loadCourses = createAction('[Course] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>()
);
