import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
// import HighchartsDataLabels from 'highcharts/modules/data-labels';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';
import { DataService } from '../data.service';

// HighchartsDataLabels(Highcharts);
HC_exporting(Highcharts);
HC_exportData(Highcharts);

@Component({
  selector: 'app-columnchart',
  templateUrl: './columnchart.component.html',
  styleUrl: './columnchart.component.scss',
})
export class ColumnchartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    const chartData = this.DataService.getColumnChartData();
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Corn vs wheat estimated production for 2020',
        align: 'left',
      },
      subtitle: {
        text: 'Source: <a target="_blank" href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
        align: 'left',
      },
      xAxis: {
        categories: chartData.categories,
        crosshair: true,
        accessibility: {
          description: 'Countries',
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: '1000 metric tons (MT)',
        },
      },
      tooltip: {
        valueSuffix: ' (1000 MT)',
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: 'Corn',
          type: 'column',
          data: chartData.cornData,
        },
        {
          name: 'Wheat',
          type: 'column',
          data: chartData.wheatData,
        },
      ],
    };
  }
}
