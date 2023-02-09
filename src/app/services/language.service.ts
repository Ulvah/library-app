import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Language } from '../model/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpClient: HttpClient) { }

  public getAllLanguages(): Observable<Language[]>{
    return this.httpClient.get<Language[]>('http://localhost:8080/api/v1/languages');
  }

  public saveLanguage(language: Language): Observable<string>{
    return this.httpClient.post<string>('http://localhost:8080/api/v1/languages', language);
  }

  public updateLanguage(language: Language): Observable<void>{
    return this.httpClient.put<void>('http://localhost:8080/api/v1/languages', language);
  }

  public deleteLanguage(guid: string): Observable<void>{
    return this.httpClient.delete<void>('http://localhost:8080/api/v1/languages/${guid}');
  }
}
