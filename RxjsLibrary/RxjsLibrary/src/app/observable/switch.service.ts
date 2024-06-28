import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from './search';

@Injectable({
  providedIn: 'root',
})
export class SwitchService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Search> {
    return this.http.get<Search>(this.apiUrl);
  }
}
