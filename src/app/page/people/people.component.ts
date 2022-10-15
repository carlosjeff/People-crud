import { PeopleFormComponent } from './people-form/people-form.component';
import { PeopleService } from './people.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { People } from 'src/app/shared/models/people.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  public filter = new FormControl('');

  constructor(private readonly peopleService: PeopleService) { }

  ngOnInit(): void {;
  }

  public openDialog(){
    this.peopleService.openDialog().subscribe(result =>{
      if(result){
        this.peopleService.create(result);
      }
    });
  }

}
