import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BooktypeEditComponent } from '../booktype-edit/booktype-edit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Booktype } from '../model/booktype';

export const BOOKTYPE_DATA = [
  {typeName: 'Matematica', guid: 'aaa-bbb-ccc-ddd'},
  {typeName: 'quimico', guid: 'aaa-bbb-ccc-ddd'}

];


@Component({
  selector: 'app-booktype',
  templateUrl: './booktype.component.html',
  styleUrls: ['./booktype.component.css']
})
export class BooktypeComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'typeName', 'actions'];
  public dataSource : Booktype[] = BOOKTYPE_DATA;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public editBookType (inputBookType : Booktype) {
    this.dialog.open(BooktypeEditComponent, { disableClose: true, data: { editableBooktype: inputBookType}
    }).afterClosed().subscribe(resp => {
      console.log('Editado');
    });
  }

  public deleteBookType (bookType : Booktype) {
    this.dialog.open(DialogComponent, { disableClose: true, data: {
      msg: 'Deseja apagar?', leftButton: 'Cancelar', rightButton: 'OK'
    }}).afterClosed().subscribe(resp => {
      console.log('Apagado');
    });
  }


  public createBookType(){
    console.log('create booktype');
  }

}




