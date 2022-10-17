import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { BOOKTYPE_DATA } from '../booktype/booktype.component';
import { LANGUAGE_DATA } from '../language/language.component';
import { Book } from '../model/book';
import { Booktype } from '../model/booktype';
import { Language } from '../model/language';

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

  public booktypes: Booktype[] = BOOKTYPE_DATA;
  public languages: Language[] = LANGUAGE_DATA;

  public booklistForm! : FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.booklistForm = this.formBuilder.group(
      {
        isbn: [this.book != null? this.book.isbn : ''],
        title: [this.book != null? this.book.title : ''],
        writer: [this.book != null? this.book.writer :''],
        publisher: [this.book != null? this.book.publisher :''],
        booktype: [this.book != null? this.book.booktype : null],
        language: [this.book != null? this.book.language : null]
      }
      );
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
