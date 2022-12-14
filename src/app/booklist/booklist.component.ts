import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BooklistEditComponent } from '../booklist-edit/booklist-edit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Book } from '../model/book';
import { BooklistService } from '../services/booklist.service';
import { SnackBarService } from '../services/snack-bar.service';


@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  public dataSource: Book[] = [];

  public displayedColumns: string[] = ['id', 'isbn', 'title', 'writer', 'publisher', 'booktype', 'language', 'actions'];

  constructor(private dialog: MatDialog, private booklistService: BooklistService,
              private snackBarService: SnackBarService) { }

  ngOnInit(): void {

    this.booklistService.getAllBooklist().subscribe((resp: Book[]) => {
      this.dataSource = resp;
    });

  }

  public createNewLivro(){

    this.dialog.open(BooklistEditComponent, {
      disableClose: true, data: { actionName: 'Criar'}
    }).afterClosed().subscribe( resp => {
      if (resp) {
        this.snackBarService.showSnackBar('Criado com sucesso', 'OK');
      }
    });

  }

  public updateLivro(book: Book) {
    this.dialog.open(BooklistEditComponent, {
      disableClose: true, data: { updatableBook: book, actionName: 'Editar'}
    }).afterClosed().subscribe( resp => {
      if (resp) {
        this.snackBarService.showSnackBar('Editado com sucesso', 'OK');
      }
    });

  }

  public deleteLivro(book: Book) {
    this.dialog.open(DialogComponent, { disableClose: true, data: {
      msg: 'Deseja apagar?', leftButton: 'Cancelar', rightButton: 'OK'
    }}).afterClosed().subscribe(resp => {
      if (resp) {
        this.snackBarService.showSnackBar('Apagado com sucesso', 'OK');
      }
    });
  }

}
