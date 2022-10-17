import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BooklistEditComponent } from '../booklist-edit/booklist-edit.component';
import { BOOKTYPE_DATA } from '../booktype/booktype.component';
import { DialogComponent } from '../dialog/dialog.component';
import { LANGUAGE_DATA } from '../language/language.component';
import { Book } from '../model/book';

export const BOOKLIST_DATA = [
  {guid: 'aaa-bbb-ccc-ddd',
   isbn: '978-85-7605-117-6',
   title: 'Algebra Linear',
   writer: 'Alfredo Steinbruch e Paulo Winterle',
   publisher: 'Pearson',
   booktype: BOOKTYPE_DATA.find(x => x.typeName == 'Matematica'),
   language: LANGUAGE_DATA.find(x => x.languageName == 'Portuguese') }
];


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  public dataSource = BOOKLIST_DATA;

  public displayedColumns: string[] = ['id', 'isbn', 'title', 'writer', 'publisher', 'booktype', 'language', 'actions'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public createNewLivro(){

    this.dialog.open(BooklistEditComponent, {
      disableClose: true, data: { actionName: 'Criar'}
    }).afterClosed().subscribe( resp => {
      console.log('Criar');
    });

  }

  public updateLivro(book: Book) {
    this.dialog.open(BooklistEditComponent, {
      disableClose: true, data: { updatableBook: book, actionName: 'Editar'}
    }).afterClosed().subscribe( resp => {
      console.log('editar');
    });

  }

  public deleteLivro(book: Book) {
    this.dialog.open(DialogComponent, { disableClose: true, data: {
      msg: 'Deseja apagar?', leftButton: 'Cancelar', rightButton: 'OK'
    }}).afterClosed().subscribe(resp => {
      console.log('Apagado');
    });
  }

}
