import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CourseListComponent } from './course-list.component';
import { selectAllCourses, selectCoursesLoading } from '../../store/course/course.selectors';

describe('CourseListComponent (NgRx-connected)', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const mockCourses = [{ id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' as const }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [
        provideMockStore({
          initialState: { course: { courses: mockCourses, loading: false, error: null } },
        }),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParamMap: { get: () => null } } },
        },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
  });

  it('should render course cards from the initial store state', () => {
    store.overrideSelector(selectAllCourses, mockCourses);
    store.overrideSelector(selectCoursesLoading, false);
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(cards.length).toBe(1);
  });

  it('should show the loading indicator when loading is true', () => {
    store.overrideSelector(selectCoursesLoading, true);
    store.refreshState();
    fixture.detectChanges();

    const loadingText = fixture.debugElement.query(By.css('p'));
    expect(loadingText.nativeElement.textContent).toContain('Loading');
  });
});
