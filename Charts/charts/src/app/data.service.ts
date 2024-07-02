import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  getData(): Observable<any> {
    return this.http.get('https://www.highcharts.com/samples/data/usdeur.json');
  }
  getStaticData() {
    return [
      29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6,
      54.4,
    ];
  }
  getData2(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
