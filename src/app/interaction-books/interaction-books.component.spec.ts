import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionBooksComponent } from './interaction-books.component';

describe('InteractionBooksComponent', () => {
  let component: InteractionBooksComponent;
  let fixture: ComponentFixture<InteractionBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractionBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
