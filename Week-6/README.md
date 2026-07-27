# Student Course Portal — Angular 20 (Digital Nurture 5.0)

Full solution code for all 10 hands-on exercises, built as a single incremental
project using standalone components (Angular 20's default, no NgModules).

## Setup

```bash
npm install -g @angular/cli
npm install -g json-server
cd student-course-portal
npm install

# Terminal 1 — mock backend for Hands-On 8+
json-server --watch db.json --port 3000

# Terminal 2 — app
ng serve
```

Open http://localhost:4200. Run unit tests with `ng test` (or `ng test --code-coverage`).

## Where each hands-on lives

| Hands-On | Topic | Key files |
|---|---|---|
| 1 | Setup, structure, first component | `angular.json`, `notes.txt`, `components/header`, `pages/home` |
| 2 | Binding types, lifecycle hooks, @Input/@Output | `pages/home`, `components/course-card` |
| 3 | Directives & pipes | `directives/highlight.directive.ts`, `pipes/credit-label.pipe.ts`, `components/course-card` |
| 4 | Template-driven forms | `features/enrollment/pages/enrollment-form` |
| 5 | Reactive forms, FormArray, custom/async validators | `features/enrollment/pages/reactive-enrollment-form` |
| 6 | Services & DI | `services/*.ts` |
| 7 | Routing, guards, lazy loading | `app.routes.ts`, `guards/*.ts`, `features/enrollment/enrollment.routes.ts` |
| 8 | HttpClient, RxJS operators, interceptors | `services/course.service.ts`, `interceptors/*.ts` |
| 9 | NgRx store, actions, reducers, effects, selectors | `store/course`, `store/enrollment` |
| 10 | Unit testing | `**/*.spec.ts` |

## Notes

- Angular 20 uses standalone components by default, so there is no `app.module.ts`;
  `app.config.ts` plays the equivalent role (registering the router, HttpClient +
  interceptors, and the NgRx store/effects).
- The `/enroll` route is lazy-loaded (`features/enrollment/enrollment.routes.ts`) —
  check DevTools → Network on first navigation to see the separate chunk load.
- `/profile` and `/enroll` are protected by `authGuard`; the reactive enrollment
  form is protected by `unsavedChangesGuard` (dirty-form confirmation on navigate-away).
- `db.json` is the mock REST API consumed by `json-server` for Hands-On 8.
