import { Component, OnInit } from '@angular/core';
import { Booktype } from '../model/booktype';

@Component({
  selector: 'app-booktype',
  templateUrl: './booktype.component.html',
  styleUrls: ['./booktype.component.css']
})
export class BooktypeComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'typeName', 'actions'];
  public dataSource : Booktype[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public editBookType (inputBookType : Booktype) {

  }

  public deleteBookType (bookType : Booktype) {
  }


  public createBookType(){

  }

}




