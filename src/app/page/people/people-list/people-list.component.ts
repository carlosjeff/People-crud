import { FormControl } from '@angular/forms';
import { People } from './../../../shared/models/people.model';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit  {

  @Input() filter!: FormControl;

  displayedColumns: string[] = ['id','name','email','birthDate'];
  dataSource!: MatTableDataSource<People>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private readonly peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getAll().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    this.filter.valueChanges.subscribe((data: String) =>{
      this.dataSource.filter = data.trim().toLowerCase();

      if(this.dataSource.paginator){
        this.dataSource.paginator.firstPage();
      }
    })
  }

}
