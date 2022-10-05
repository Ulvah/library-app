import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  public editBookType (inputBookType : Booktype) {
    console.log('edit booktype');
  }

  public deleteBookType (bookType : Booktype) {
    console.log('delete booktype');
  }


  public createBookType(){
    console.log('create booktype');
  }

}




