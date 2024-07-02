import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-areachart-apidata',
  templateUrl: './areachart-apidata.component.html',
  styleUrl: './areachart-apidata.component.scss',
})
export class AreachartApidataComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData2().subscribe((data) => {
      const chartData = data
        .slice(0, 10)
        .map((item: { title: any; id: any }) => ({
          name: item.title,
          y: item.id,
        }));

      this.chartOptions = {
        chart: {
          type: 'area',
        },
        title: {
          text: 'Area chart using Json placeholder APi',
        },
        series: [
          {
            type: 'area',
            name: 'Posts',
            data: chartData,
          },
        ],
      };
    });
  }
}
