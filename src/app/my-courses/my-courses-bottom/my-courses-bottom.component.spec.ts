import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesBottomComponent } from './my-courses-bottom.component';

describe('MyCoursesBottomComponent', () => {
  let component: MyCoursesBottomComponent;
  let fixture: ComponentFixture<MyCoursesBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCoursesBottomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCoursesBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
