import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booktype-form',
  templateUrl: './booktype-form.component.html',
  styleUrls: ['./booktype-form.component.css']
})
export class BooktypeFormComponent implements OnInit {

  public actionName = 'Editar';
  public booktypeForm: FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.booktypeForm = this.formBuilder.group({
      typeName : 'test'
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
