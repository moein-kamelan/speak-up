import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesCardComponent } from './my-courses-card.component';

describe('MyCoursesCardComponent', () => {
  let component: MyCoursesCardComponent;
  let fixture: ComponentFixture<MyCoursesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCoursesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCoursesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
