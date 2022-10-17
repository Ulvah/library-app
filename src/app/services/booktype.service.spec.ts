import { TestBed } from '@angular/core/testing';

import { BooktypeService } from './booktype.service';

describe('BooktypeService', () => {
  let service: BooktypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooktypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
