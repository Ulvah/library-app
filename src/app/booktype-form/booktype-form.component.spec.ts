import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktypeFormComponent } from './booktype-form.component';

describe('BooktypeFormComponent', () => {
  let component: BooktypeFormComponent;
  let fixture: ComponentFixture<BooktypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooktypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooktypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
