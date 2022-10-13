import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Booktype } from '../model/booktype';

@Component({
  selector: 'app-booktype-form',
  templateUrl: './booktype-form.component.html',
  styleUrls: ['./booktype-form.component.css']
})
export class BooktypeFormComponent implements OnInit {

  @Input() public actionName = 'Editar';
  public booktypeForm!: FormGroup;

  @Output() closeModelEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() public editableBooktype!: Booktype;

  constructor(private formBuilder : FormBuilder) {

  }

  ngOnInit(): void {
    this.booktypeForm = this.formBuilder.group({
      typeName : this.editableBooktype != null ? this.editableBooktype.typeName : ''
    });
  }

  public save(){
    this.closeModelEventEmitter.emit(true);
  }

  public cancel(){
    this.closeModelEventEmitter.emit(false);
  }

}
