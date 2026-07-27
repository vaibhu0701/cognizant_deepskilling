import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Operating Systems', code: 'CS102', credits: 3, gradeStatus: 'pending' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService],
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Ensures no unexpected/outstanding HTTP requests were made in each test.
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch courses via GET', () => {
    service.getCourses().subscribe((courses) => {
      expect(courses.length).toBe(2);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  it('should propagate an error message on a failed request', () => {
    service.getCourses().subscribe({
      next: () => fail('expected an error, not courses'),
      error: (err) => expect(err.message).toBe('Failed to load courses. Please try again.'),
    });

    // retry(2) means the request is retried before the error is finally
    // surfaced, so flush the failure for each attempt (1 initial + 2 retries).
    for (let i = 0; i < 3; i++) {
      httpMock.expectOne('http://localhost:3000/courses').flush('Server error', {
        status: 500,
        statusText: 'Internal Server Error',
      });
    }
  });

  it('should POST a new course', () => {
    const newCourse = { name: 'Web Dev', code: 'CS105', credits: 2, gradeStatus: 'pending' as const };

    service.createCourse(newCourse).subscribe((course) => {
      expect(course.id).toBe(6);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('POST');
    req.flush({ id: 6, ...newCourse });
  });
});
