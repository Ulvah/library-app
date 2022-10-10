import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booktype } from '../model/booktype';


@Component({
  selector: 'app-booktype-edit',
  templateUrl: './booktype-edit.component.html',
  styleUrls: ['./booktype-edit.component.css']
})
export class BooktypeEditComponent implements OnInit {

  public editableBooktype!: Booktype;
  public actionName: string = 'Editar';

  constructor(private dialogRef: MatDialogRef<BooktypeEditComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any) {
      if(dialogData.editableBooktype != null){
        this.editableBooktype = dialogData.editableBooktype;
      }

      if(dialogData.actionName != null) {
        this.actionName = dialogData.actionName;
      }
     }

  ngOnInit(): void {
  }

  public closeModalWindow($event: any){
    //TODO: handle action -save/cancel
    //if($event) this.dialogRef.close();
    this.dialogRef.close($event);
  }


}




