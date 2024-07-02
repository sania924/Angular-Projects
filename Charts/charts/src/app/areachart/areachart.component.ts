import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrl: './areachart.component.scss',
})
export class AreachartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Area Chart with Static Data Series',
    },
    series: [
      {
        type: 'area',
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
      },
    ],
  };

  ngOnInit(): void {
    Highcharts.chart('container', this.chartOptions);
  }
}
