import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { Book } from '../model/book';
import { Booktype } from '../model/booktype';
import { Language } from '../model/language';
import { BooktypeService } from '../services/booktype.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-booklist-form',
  templateUrl: './booklist-form.component.html',
  styleUrls: ['./booklist-form.component.css']
})
export class BooklistFormComponent implements OnInit {

  @Input() public actionName = 'Editar';
  @Input() public book! : Book;
  @Output() public formCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(FormGroupDirective) booklistFormGroupDirective! : FormGroupDirective;

  public booktypes: Booktype[] = [];
  public languages: Language[] = [];

  public booklistForm! : FormGroup;

  constructor(private formBuilder : FormBuilder, private booktypeService: BooktypeService,
    private languageService: LanguageService) { }

  ngOnInit(): void {

    this.booktypeService.getAllBooktypes().subscribe((resp: Booktype[]) => {
      this.booktypes = resp;
    });

    this.languageService.getAllLanguages().subscribe((resp: Language[]) => {
      this.languages = resp;
      this.createForm();
    });

  }

  public createForm() {
    this.booklistForm = this.formBuilder.group(
      {
        isbn: [this.book != null? this.book.isbn : ''],
        title: [this.book != null? this.book.title : ''],
        writer: [this.book != null? this.book.writer :''],
        publisher: [this.book != null? this.book.publisher :''],
        booktype: [this.book != null? this.book.booktype : null],
        language: [this.book != null? this.book.language : null]
      });
  }

  public clearForm(){
    this.booklistForm.reset();
    this.booklistFormGroupDirective.resetForm();
  }

  public closeForm(){

  }

  public save(){
    this.formCloseEvent.emit(true);
  }

  public cancel(){
    this.formCloseEvent.emit(false);
  }

}
