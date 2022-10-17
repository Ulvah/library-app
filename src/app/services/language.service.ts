import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Language } from '../model/language';

export const LANGUAGE_DATA = [
  {languageName: 'Portuguese', guid: 'aaa-bbb-ccc-ddd'},
  {languageName: 'Inglis', guid: 'aaa-bbb-ccc-ddd'}

];

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  public getAllLanguages(): Observable<Language[]>{
    return of (LANGUAGE_DATA);
  }

}
