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

  // column chart data
  getColumnChartData() {
    return {
      categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
      cornData: [406292, 260000, 107000, 68300, 27500, 14500],
      wheatData: [51086, 136000, 5500, 141000, 107180, 77000],
    };
  }
  // bubble chart
  bubbleChartData() {
    return [
      { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium', color: 'grey' },
      {
        x: 86.5,
        y: 102.9,
        z: 14.7,
        name: 'DE',
        country: 'Germany',
        color: 'blue',
      },
      {
        x: 80.8,
        y: 91.5,
        z: 15.8,
        name: 'FI',
        country: 'Finland',
        color: 'green',
      },
      {
        x: 80.4,
        y: 102.5,
        z: 12,
        name: 'NL',
        country: 'Netherlands',
        color: 'orange',
      },
      {
        x: 80.3,
        y: 86.1,
        z: 11.8,
        name: 'SE',
        country: 'Sweden',
        color: 'yellow',
      },
      { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain', color: 'red' },
      {
        x: 74.2,
        y: 68.5,
        z: 14.5,
        name: 'FR',
        country: 'France',
        color: 'purple',
      },
      { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway', color: 'pink' },
      {
        x: 71,
        y: 93.2,
        z: 24.7,
        name: 'UK',
        country: 'United Kingdom',
        color: 'brown',
      },
      {
        x: 69.2,
        y: 57.6,
        z: 10.4,
        name: 'IT',
        country: 'Italy',
        color: 'cyan',
      },
      {
        x: 68.6,
        y: 20,
        z: 16,
        name: 'RU',
        country: 'Russia',
        color: 'magenta',
      },
      {
        x: 65.5,
        y: 126.4,
        z: 35.3,
        name: 'US',
        country: 'United States',
        color: 'lime',
      },
      {
        x: 65.4,
        y: 50.8,
        z: 28.5,
        name: 'HU',
        country: 'Hungary',
        color: 'navy',
      },
      {
        x: 63.4,
        y: 51.8,
        z: 15.4,
        name: 'PT',
        country: 'Portugal',
        color: 'olive',
      },
      {
        x: 64,
        y: 82.9,
        z: 31.3,
        name: 'NZ',
        country: 'New Zealand',
        color: 'teal',
      },
    ];
  }
}
