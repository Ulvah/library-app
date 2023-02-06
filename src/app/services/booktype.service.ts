import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booktype } from '../model/booktype';

@Injectable({
  providedIn: 'root'
})
export class BooktypeService {

  constructor(private httpClient: HttpClient) { }

  public getAllBooktypes(): Observable<Booktype[]>{
    return this.httpClient.get<Booktype[]>('http://localhost:8080/api/v1/book-types');
  }

  public saveBooktype(booktype: Booktype): Observable<string>{
    return this.httpClient.post<string>('http://localhost:8080/api/v1/book-types', booktype);
  }

  public updateBooktype(booktype: Booktype): Observable<void>{
    return this.httpClient.put<void>('http://localhost:8080/api/v1/book-types', booktype);
  }

  public deleteBooktype(guid: string): Observable<void>{
    return this.httpClient.delete<void>('http://localhost:8080/api/v1/book-types/${guid}');
  }

}
