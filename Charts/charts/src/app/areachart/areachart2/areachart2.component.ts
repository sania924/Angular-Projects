import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-areachart2',
  templateUrl: './areachart2.component.html',
  styleUrl: './areachart2.component.scss',
})
export class Areachart2Component {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Area Chart from Static Data Service',
    },
    series: [
      {
        type: 'area',
        data: [],
      },
    ],
  };

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    const data = this.DataService.getStaticData();
    this.chartOptions.series = [
      {
        type: 'area',
        data: data,
      },
    ];
    Highcharts.chart('container', this.chartOptions);
  }
}
