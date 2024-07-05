import { Component } from '@angular/core';
import { DataService } from '../data.service';
import * as Highcharts from 'highcharts';
// import HighchartsDataLabels from 'highcharts/modules/data-labels';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

// HighchartsDataLabels(Highcharts);
HC_exporting(Highcharts);
HC_exportData(Highcharts);

@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrl: './bubblechart.component.scss',
})
export class BubblechartComponent {
  chartOptions: any;
  Highcharts: typeof Highcharts = Highcharts;

  constructor(private DataService: DataService) {
    this.chartOptions = {
      chart: {
        type: 'bubble',
      },
      title: {
        text: 'Bubble Chart Example',
      },
      series: [
        {
          data: this.DataService.bubbleChartData(),
        },
      ],
    };
  }

  ngOnInit(): void {}
}
