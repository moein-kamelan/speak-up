import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesCardDesktopComponent } from './my-courses-card-desktop.component';

describe('MyCoursesCardDesktopComponent', () => {
  let component: MyCoursesCardDesktopComponent;
  let fixture: ComponentFixture<MyCoursesCardDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCoursesCardDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCoursesCardDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
