import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booktype } from '../model/booktype';
import { BooktypeService } from '../services/booktype.service';
import { SnackBarService } from '../services/snack-bar.service';

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

  public isFormReady = false;

  constructor(private formBuilder : FormBuilder, private booktypeService: BooktypeService,
    private snackBarService: SnackBarService) {

  }

  ngOnInit(): void {
    this.booktypeForm = this.formBuilder.group({
      typeName : [this.editableBooktype != null ? this.editableBooktype.typeName : '', Validators.required]
    });

    this.isFormReady = true;
  }

  public save(){
    if (this.booktypeForm.valid){
      if (this.actionName === 'Editar') {

        var updatedBooktype = {
          guid: this.editableBooktype.guid,
          typeName: this.booktypeForm.value['typeName']
        };

        this.booktypeService.updateBooktype(updatedBooktype)
        .subscribe((resp: any) => {
          this.closeModelEventEmitter.emit(true);
        }, (err: any) => {
          this.snackBarService.showSnackBar('Nao foi possivel atualizar book type. tente novamente', 'OK');
        });
      } else {
        this.booktypeService.saveBooktype(this.booktypeForm.value)
        .subscribe((resp: any) => {
          this.closeModelEventEmitter.emit(true);
        }, (err: any) => {
          this.snackBarService.showSnackBar('Nao foi possivel criar book type. tente novamente', 'OK');
        });
      }
    }

  }

  public cancel(){
    this.closeModelEventEmitter.emit(false);
  }

  public clearForm(){
    this.booktypeForm.reset();
  }


}
