import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConfirmModalComponent } from './add-confirm-modal.component';

describe('AddConfirmModalComponent', () => {
  let component: AddConfirmModalComponent;
  let fixture: ComponentFixture<AddConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddConfirmModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
