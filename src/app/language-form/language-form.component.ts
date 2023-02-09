import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Language } from '../model/language';
import { LanguageService } from '../services/language.service';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {

  @Input() public actionName = 'Editar';
  public languageForm!: FormGroup;

  @Output() closeModelEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() public editableLanguage!: Language;

  public isFormReady = false;

  constructor(private formBuilder : FormBuilder, private languageService: LanguageService,
    private snackBarService: SnackBarService) {

   }

  ngOnInit(): void {
    this.languageForm = this.formBuilder.group({
      languageName : [this.editableLanguage != null ? this.editableLanguage.languageName : '', Validators.required]
    });

    this.isFormReady = true;
  }


  public save(){
    if (this.languageForm.valid){
      if (this.actionName === 'Editar') {

        var updatedLanguage = {
          guid: this.editableLanguage.guid,
          languageName: this.languageForm.value['languageName']
        };

        this.languageService.updateLanguage(updatedLanguage)
        .subscribe((resp: any) => {
          this.closeModelEventEmitter.emit(true);
        }, (err: any) => {
          this.snackBarService.showSnackBar('Nao foi possivel atualizar language. tente novamente', 'OK');
        });
      } else {
        this.languageService.saveLanguage(this.languageForm.value)
        .subscribe((resp: any) => {
          this.closeModelEventEmitter.emit(true);
        }, (err: any) => {
          this.snackBarService.showSnackBar('Nao foi possivel criar language. tente novamente', 'OK');
        });
      }
    }

  }

  public cancel(){
    this.closeModelEventEmitter.emit(false);
  }

  public clearForm(){
    this.languageForm.reset();
  }
}
