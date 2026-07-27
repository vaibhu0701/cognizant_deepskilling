import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '../../guards/unsaved-changes.guard';

// This whole feature area is only downloaded by the browser the first time
// the user navigates to /enroll — verify in DevTools > Network for a
// separate chunk file appearing on first visit.
export const ENROLLMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/enrollment-form/enrollment-form.component').then((m) => m.EnrollmentFormComponent),
  },
  {
    path: 'reactive',
    loadComponent: () =>
      import('./pages/reactive-enrollment-form/reactive-enrollment-form.component').then(
        (m) => m.ReactiveEnrollmentFormComponent
      ),
    canDeactivate: [unsavedChangesGuard],
  },
];
