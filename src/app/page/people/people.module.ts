import { ConfirmDialogModule } from './../../shared/components/confirm-dialog/confirm-dialog.module';
import { PeopleService } from './people.service';
import { InputModule } from './../../shared/components/input/input.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { PeopleComponent } from './people.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { PeopleListComponent } from './people-list/people-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import localePt from '@angular/common/locales/pt';
import { PeopleFormComponent } from './people-form/people-form.component';
import {MatDialogModule} from '@angular/material/dialog';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    PeopleComponent,
    PeopleListComponent,
    PeopleFormComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    ConfirmDialogModule
  ],
  providers: [
    PeopleService,
    {
      provide: LOCALE_ID, useValue: "pt"
    },
    DatePipe
  ]
})
export class PeopleModule { }
