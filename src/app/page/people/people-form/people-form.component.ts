import { People } from './../../../shared/models/people.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.scss']
})
export class PeopleFormComponent implements OnInit {

  public peopleForm!: FormGroup;


  constructor(public dialogRef: MatDialogRef<PeopleFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: People,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.buildForm();

    this.dialogRef.afterOpened().subscribe(() =>{
      if(this.data){
        const date = this.datePipe.transform(this.data.birthDate, 'yyyy-MM-dd')
        this.peopleForm.patchValue({...this.data, birthDate: date });
      }
    })
  }

  public save(){
    this.dialogRef.close(this.peopleForm.value as People)
  }

  private buildForm(){
    this.peopleForm = this.formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      email: ['', Validators.email],
      birthDate: ['']
    })
  }

}
