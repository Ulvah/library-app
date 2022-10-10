import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {

  public actionName = 'Editar';
  public languageForm: FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.languageForm = this.formBuilder.group({
      languageName : 'test'
    });
   }

  ngOnInit(): void {
  }

  public save(){
    console.log('salvar');
  }

  public cancel(){
    console.log('cancelar');
  }

}
