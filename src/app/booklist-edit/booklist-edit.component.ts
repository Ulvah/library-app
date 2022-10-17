import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../model/book';

@Component({
  selector: 'app-booklist-edit',
  templateUrl: './booklist-edit.component.html',
  styleUrls: ['./booklist-edit.component.css']
})
export class BooklistEditComponent implements OnInit {

  public actionName = 'Editar';
  public book! : Book;

  constructor(public modalRef: MatDialogRef<BooklistEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.updatableBook != null){
      this.book = data.updatableBook;
    }
    if (data.actionName != null) {
      this.actionName = data.actionName;
    }
   }

  ngOnInit(): void {
  }

  public onFormClose($event : any) {
    this.modalRef.close($event);
  }

}
