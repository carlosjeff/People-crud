import { InputModule } from './../../shared/components/input/input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class PeopleModule { }
