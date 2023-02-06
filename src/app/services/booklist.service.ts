import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../model/book';
import { Language } from '../model/language';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  constructor(private httpClient: HttpClient) { }

  public getAllBooklist(): Observable<Book[]>{
    return this.httpClient.get<Book[]>('http://localhost:8080/api/v1/books');
  }

  public getBookbyIsbn(isbn: String): Observable<Book>{
    return this.httpClient.get<Book>('http://localhost:8080/api/v1/books/${isbn}');
  }

  public getBookbTitle(title: String): Observable<Book>{
    return this.httpClient.get<Book>('http://localhost:8080/api/v1/books/${title}');
  }

  public getBookbyWriter(writer: String): Observable<Book>{
    return this.httpClient.get<Book>('http://localhost:8080/api/v1/books/${writer}');
  }

  public getBookbyPublisher(publisher: String): Observable<Book>{
    return this.httpClient.get<Book>('http://localhost:8080/api/v1/books/${publisher}');
  }

  public saveBook(book: Book): Observable<String>{
    return this.httpClient.post<String>('http://localhost:8080/api/v1/books',book);
  }

  public updateBook(book: Book): Observable<void>{
    return this.httpClient.put<void>('http://localhost:8080/api/v1/books',book);
  }

  public deleteBook(guid: String): Observable<void>{
    return this.httpClient.delete<void>('http://localhost:8080/api/v1/books/${guid}');
  }

}
