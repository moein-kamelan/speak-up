import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBookComponent } from './course-book.component';

describe('CourseBookComponent', () => {
  let component: CourseBookComponent;
  let fixture: ComponentFixture<CourseBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
