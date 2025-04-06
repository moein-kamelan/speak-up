import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesCardMobileComponent } from './my-courses-card-mobile.component';

describe('MyCoursesCardMobileComponent', () => {
  let component: MyCoursesCardMobileComponent;
  let fixture: ComponentFixture<MyCoursesCardMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCoursesCardMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCoursesCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
