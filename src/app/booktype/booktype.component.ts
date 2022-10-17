import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BooktypeEditComponent } from '../booktype-edit/booktype-edit.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Booktype } from '../model/booktype';
import { BooktypeService } from '../services/booktype.service';

@Component({
  selector: 'app-booktype',
  templateUrl: './booktype.component.html',
  styleUrls: ['./booktype.component.css']
})
export class BooktypeComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'typeName', 'actions'];
  public dataSource : Booktype[] = [];

  constructor(private dialog: MatDialog, private booktypeService: BooktypeService) { }

  ngOnInit(): void {
    this.booktypeService.getAllBooktypes().subscribe((resp: Booktype[]) => {
      this.dataSource = resp;
    });
  }

  public editBooktype (inputBooktype : Booktype) {
    this.dialog.open(BooktypeEditComponent, { disableClose: true, data: { editableBooktype: inputBooktype }
    }).afterClosed().subscribe(resp => {
      console.log('Editado');
    });
  }

  public deleteBooktype (booktype : Booktype) {
    this.dialog.open(DialogComponent, { disableClose: true, data: {
      msg: 'Deseja apagar?', leftButton: 'Cancelar', rightButton: 'OK'
    }}).afterClosed().subscribe(resp => {
      console.log('Apagado');
    });
  }


  public createBooktype(){
    this.dialog.open(BooktypeEditComponent, { disableClose: true, data: { actionName: 'Criar' }
    }).afterClosed().subscribe(resp => {
      console.log('Criar');
    });
  }

}




