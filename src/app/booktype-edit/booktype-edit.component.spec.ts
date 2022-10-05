import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktypeEditComponent } from './booktype-edit.component';

describe('BooktypeEditComponent', () => {
  let component: BooktypeEditComponent;
  let fixture: ComponentFixture<BooktypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooktypeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooktypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
