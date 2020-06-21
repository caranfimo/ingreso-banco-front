import {Injectable} from '@angular/core';
import {Person} from '../models/Person';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonRequest} from '../models/PersonRequest';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  url = 'http://localhost:8080/person';

  constructor(private http: HttpClient) {
  }

  public getListPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  public getDetailsPersons(id: number): Observable<Person> {
    return this.http.get<Person>(this.url + '/id?id=' + id);
  }

  public createPerson(request: PersonRequest): Observable<Person> {
    return this.http.post<Person>(this.url, request);
  }

  public deletePerson(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.url + '?id=' + id);
  }

}
