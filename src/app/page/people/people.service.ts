import { People } from './../../shared/models/people.model';
import { Observable } from 'rxjs';
import { DataService } from './../../shared/services/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private readonly dataService: DataService) { }


  public getAll(): Observable<Array<People>>{
    return this.dataService.getAll<People>('pessoas');
  }
}
