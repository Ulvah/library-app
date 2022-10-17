import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../model/book';
import { Booktype } from '../model/booktype';
import { Language } from '../model/language';

export const BOOKLIST_DATA = [
  {guid: 'aaa-bbb-ccc-ddd',
   isbn: '978-85-7605-117-6',
   title: 'Algebra Linear',
   writer: 'Alfredo Steinbruch e Paulo Winterle',
   publisher: 'Pearson',
   booktype: {guid: 'aaaa-bbbb-cccc-dddd', typeName:'Matematic'},
   language: {guid:'aaaa-bbbb-cccc-dddd', languageName: 'Portuguese'}}
];

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  constructor() { }

  public getAllBooklist(): Observable<Book[]>{
    return of (BOOKLIST_DATA);
  }
}
