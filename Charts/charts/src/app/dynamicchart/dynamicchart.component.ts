import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';
// import HighchartsDataLabels from 'highcharts/modules/data-labels';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

// HighchartsDataLabels(Highcharts);
HC_exporting(Highcharts);
HC_exportData(Highcharts);

@Component({
  selector: 'app-dynamicchart',
  templateUrl: './dynamicchart.component.html',
  styleUrl: './dynamicchart.component.scss',
})
export class DynamicchartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  defaultData: string = 'https://demo-live-data.highcharts.com/time-data.csv';
  urlInput: string = this.defaultData;
  enablePolling: boolean = true;
  pollingTime: number = 2;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    if (this.pollingTime < 1 || !this.pollingTime) {
      this.pollingTime = 1;
    }

    this.chartOptions = {
      chart: {
        type: 'areaspline',
      },
      title: {
        text: 'Live Data',
      },
      accessibility: {
        announceNewData: {
          enabled: true,
          minAnnounceInterval: 15000,
          announcementFormatter: (allSeries, newSeries, newPoint) => {
            if (newPoint) {
              return 'New point added. Value: ' + newPoint.y;
            }
            return false;
          },
        },
      },
      plotOptions: {
        areaspline: {
          color: '#32CD32',
          fillColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#32CD32'],
              [1, '#32CD3200'],
            ],
          },
          threshold: null,
          marker: {
            lineWidth: 1,
            lineColor: null,
            fillColor: 'white',
          },
        },
      },
      data: {
        csvURL: this.urlInput,
        enablePolling: this.enablePolling,
        dataRefreshRate: this.pollingTime,
      },
    };

    Highcharts.chart('container', this.chartOptions);
  }

  onUrlInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.urlInput = input.value;
    this.createChart();
  }

  onPollingCheckboxChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.enablePolling = input.checked;
    this.createChart();
  }

  onPollingInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.pollingTime = parseInt(input.value, 10);
    this.createChart();
  }
}
