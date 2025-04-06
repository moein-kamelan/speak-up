import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesTopComponent } from './my-courses-top.component';

describe('MyCoursesTopComponent', () => {
  let component: MyCoursesTopComponent;
  let fixture: ComponentFixture<MyCoursesTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCoursesTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCoursesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
