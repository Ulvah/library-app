import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Language } from '../model/language';

@Component({
  selector: 'app-language-edit',
  templateUrl: './language-edit.component.html',
  styleUrls: ['./language-edit.component.css']
})
export class LanguageEditComponent implements OnInit {

  public editableLanguage!: Language;
  public actionName: string = 'Editar';

  constructor(private dialogRef: MatDialogRef<LanguageEditComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any) {
      if(dialogData.editableLanguage != null){
        this.editableLanguage = dialogData.editableLanguage;
      }
      if(dialogData.actionName != null) {
        this.actionName = dialogData.actionName;
      }

    }

  ngOnInit(): void {
  }

  public closeModelWindow($event: any){
    //TODO: handle action -save/cancel
    //if($event) this.dialogRef.close();
    this.dialogRef.close($event);
  }

}
