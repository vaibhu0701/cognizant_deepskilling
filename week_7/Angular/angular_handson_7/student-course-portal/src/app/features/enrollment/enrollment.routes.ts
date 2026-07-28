import { Routes } from '@angular/router';

import { ReactiveEnrollmentForm } from '../../pages/reactive-enrollment-form/reactive-enrollment-form';
import { pendingChangesGuard } from '../../guards/pending-changes-guard';

export const ENROLLMENT_ROUTES: Routes = [
  {
    path: '',
    component: ReactiveEnrollmentForm,
    canDeactivate: [pendingChangesGuard]
  }
];