import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BooktypeEditComponent } from '../booktype-edit/booktype-edit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Booktype } from '../model/booktype';
import { BooktypeService } from '../services/booktype.service';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-booktype',
  templateUrl: './booktype.component.html',
  styleUrls: ['./booktype.component.css']
})
export class BooktypeComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'typeName', 'actions'];
  public dataSource : Booktype[] = [];

  constructor(private dialog: MatDialog, private booktypeService: BooktypeService,
               private snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.loadAllBooktype();
  }

  private loadAllBooktype() {
    this.booktypeService.getAllBooktypes().subscribe(
      (resp: Booktype[]) => {
        this.dataSource = resp;
      }
    );
  }

  public editBooktype (inputBooktype : Booktype) {
    this.dialog.open(BooktypeEditComponent, { disableClose: true,
      data: { editableBooktype: inputBooktype }
    }).afterClosed().subscribe(resp => {
      if (resp) {
        this.loadAllBooktype();
        this.snackBarService.showSnackBar('Editado com sucesso', 'OK');
      }
    });
  }

  public deleteBooktype (booktype : Booktype) {
    this.dialog.open(DialogComponent, { disableClose: true, data: {
      msg: 'Deseja apagar?', leftButton: 'Cancelar', rightButton: 'OK'
    }}).afterClosed().subscribe(resp => {
      if (resp) {
        this.booktypeService.deleteBooktype(booktype.guid).subscribe(
          (resp: any) => {
            this.loadAllBooktype();
            this.snackBarService.showSnackBar('Tipo do livro apagado', 'OK');
          }, (err: any) => {
            this.snackBarService.showSnackBar('Não pode apagar tipo do livro', 'OK');
          }
        )
      }
    });
  }

  public createBooktype(){
    this.dialog.open(BooktypeEditComponent, { disableClose: true, data: { actionName: 'Criar' }
    }).afterClosed().subscribe(resp => {
      if (resp) {
        this.loadAllBooktype();
        this.snackBarService.showSnackBar('Criada com sucesso', 'OK');
      }
    });
  }

}




