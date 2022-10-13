import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  public getOne<T>(coll: string, id: number): Observable<T>{
    return this.http.get<T>(`${this.url}/${coll}/${id}`);
  }

  public getAll<T>(coll: string): Observable<Array<T>>{
    return this.http.get<Array<T>>(`${this.url}/${coll}`);
  }

  public create<T>(coll: string,body: any): Observable<T>{
    return this.http.post<T>(`${this.url}/${coll}`,body);
  }

  public update<T>(coll: string,body: any): Observable<T>{
    if(!body.id){
      throw new Error('');
    }

    return this.http.put<T>(`${this.url}/${coll}/${body.id}`,body);
  }

  public delete(coll: string,id: number): Observable<string>{
    return this.http.delete<string>(`${this.url}/${coll}/${id}`);
  }
}
