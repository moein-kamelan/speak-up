import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavigationButtonComponent } from './sidebar-navigation-button.component';

describe('SidebarNavigationButtonComponent', () => {
  let component: SidebarNavigationButtonComponent;
  let fixture: ComponentFixture<SidebarNavigationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavigationButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNavigationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
