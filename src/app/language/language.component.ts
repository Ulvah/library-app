import { Component, OnInit } from '@angular/core';
import { Language } from '../model/language';

export const LANGUAGE_DATA = [
  {languageName: 'Portuguese', guid: 'aaa-bbb-ccc-ddd'},
  {languageName: 'Inglis', guid: 'aaa-bbb-ccc-ddd'}

];

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'languageName', 'actions'];
  public dataSource : Language[] = LANGUAGE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  public editLanguage (inputLanguage : Language) {
    console.log('edit language');
  }

  public deleteLanguage (language : Language) {
    console.log('delete language');
  }


  public createLanguage(){
    console.log('create language');
  }

}
