import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  filter = new FormControl('');

  constructor() { }

  ngOnInit(): void {

    this.filter.valueChanges.subscribe(data => {
      console.table(data)
    })
  }

}
