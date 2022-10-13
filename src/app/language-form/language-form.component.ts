import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Language } from '../model/language';

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

  constructor(private formBuilder : FormBuilder) {

   }

  ngOnInit(): void {
    this.languageForm = this.formBuilder.group({
      languageName : this.editableLanguage != null ? this.editableLanguage.languageName : ''
    });
  }

  public save(){
    this.closeModelEventEmitter.emit(true);
  }

  public cancel(){
    this.closeModelEventEmitter.emit(false);
  }

}
