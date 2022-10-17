import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booktype } from '../model/booktype';

export const BOOKTYPE_DATA = [
  {typeName: 'Matematica', guid: 'aaa-bbb-ccc-ddd'},
  {typeName: 'quimico', guid: 'aaa-bbb-ccc-ddd'}

];

@Injectable({
  providedIn: 'root'
})
export class BooktypeService {

  constructor() { }

  public getAllBooktypes(): Observable<Booktype[]>{
    return of (BOOKTYPE_DATA);
  }
}
