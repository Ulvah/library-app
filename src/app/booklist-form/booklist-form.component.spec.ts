import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistFormComponent } from './booklist-form.component';

describe('BooklistFormComponent', () => {
  let component: BooklistFormComponent;
  let fixture: ComponentFixture<BooklistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooklistFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooklistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
