import { ConfirmDialogComponent } from './../../shared/components/confirm-dialog/confirm-dialog.component';
import { People } from './../../shared/models/people.model';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { DataService } from './../../shared/services/data.service';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeopleFormComponent } from './people-form/people-form.component';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class PeopleService {

  private peopleSubject = new BehaviorSubject<Array<People>>([])

  constructor(private readonly dataService: DataService, private dialog: MatDialog) {
    this.getAll();
  }

  public get people(): Observable<Array<People>>{
    return this.peopleSubject;
  }

  public getAll(): void{
    this.dataService.getAll<People>('pessoas').subscribe(data => {
      this.peopleSubject.next(data)
    })
  }

  public create(data: People):  void{
    this.dataService.create('pessoa',data).subscribe(() =>{
      this.getAll();
    })
  }

  public update(data: People): void{
    this.dataService.update('pessoa',data).subscribe(() => {
      this.getAll();
    })
  }

  public delete(id: number): void{
    this.dataService.delete('pessoa',id).subscribe(() => {
      this.getAll();
    })
  }

  public openDialog(data?: People): Observable<People | null>{
    const dialogRef = this.dialog.open(PeopleFormComponent, {
      data: data,
      width: '500px',
      autoFocus: 'input',
    });

    return dialogRef.afterClosed();
  }


  public confirmDialog(): Observable<boolean>{

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "550px",
    });

    return dialogRef.afterClosed();
  }

  public emailExists(email: string): Observable<boolean>{
     return of(this.peopleSubject.getValue().some(item => item.email.toLowerCase() == email.toLowerCase()));
  }



}
