import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  // Nested routes: /courses (list) and /courses/:id (detail) share a layout with its own <router-outlet>
  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      { path: '', component: CourseListComponent },
      { path: ':id', component: CourseDetailComponent },
    ],
  },

  { path: 'profile', component: StudentProfileComponent, canActivate: [authGuard] },

  // Lazy-loaded feature area for enrollment forms (Hands-On 7, Task 2).
  // Opening DevTools > Network on first visit to /enroll shows a separate chunk downloaded on demand.
  {
    path: 'enroll',
    canActivate: [authGuard],
    loadChildren: () => import('./features/enrollment/enrollment.routes').then((m) => m.ENROLLMENT_ROUTES),
  },

  { path: '**', component: NotFoundComponent },
];
