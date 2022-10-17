import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { LanguageEditComponent } from '../language-edit/language-edit.component';
import { Language } from '../model/language';
import { LanguageService } from '../services/language.service';



@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'languageName', 'actions'];
  public dataSource : Language[] = [];

  constructor(private dialog: MatDialog, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.getAllLanguages().subscribe((resp: Language[]) => {
      this.dataSource = resp;
    });
  }

  public editLanguage (inputLanguage : Language) {
    this.dialog.open(LanguageEditComponent, { disableClose: true, data: { editableLanguage: inputLanguage}
    }).afterClosed().subscribe(resp => {
      console.log('Editado');
    });
  }

  public deleteLanguage (language : Language) {
    this.dialog.open(DialogComponent, { disableClose: true, data: {
      msg: 'Deseja apagar?', leftButton: 'Cancelar', rightButton: 'OK'
    }}).afterClosed().subscribe(resp => {
      console.log('Apagado');
    });
  }


  public createLanguage(){
    this.dialog.open(LanguageEditComponent, { disableClose: true, data: { actionName: 'Criar'}
    }).afterClosed().subscribe(resp => {
      console.log('criando');
    });
  }

}
