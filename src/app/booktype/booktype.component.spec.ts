import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktypeComponent } from './booktype.component';

describe('BooktypeComponent', () => {
  let component: BooktypeComponent;
  let fixture: ComponentFixture<BooktypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooktypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooktypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
