import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  // column chart data
  getColumnChartData() {
    return {
      categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
      cornData: [406292, 260000, 107000, 68300, 27500, 14500],
      wheatData: [51086, 136000, 5500, 141000, 107180, 77000],
    };
  }
  // barcHART
  getPopulationData(): Observable<any> {
    // Example of fetching data from a service or mock data
    return of({
      categories: ['Africa', 'America', 'Asia', 'Europe'],
      data: [
        { name: 'Year 1990', data: [632, 727, 3202, 721] },
        { name: 'Year 2000', data: [814, 841, 3714, 726] },
        { name: 'Year 2021', data: [1393, 1031, 4695, 745] },
      ],
    });
  }
}
