import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
// import HighchartsDataLabels from 'highcharts/modules/data-labels';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

// HighchartsDataLabels(Highcharts);
HC_exporting(Highcharts);
HC_exportData(Highcharts);

@Component({
  selector: 'app-chartpractice',
  templateUrl: './chartpractice.component.html',
  styleUrl: './chartpractice.component.scss',
})
export class ChartpracticeComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Egg Yolk Composition',
    },
    tooltip: {
      valueSuffix: '%',
    },
    subtitle: {
      text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          distance: 20,
          style: {
            fontSize: '1.2em',
            textOutline: 'none',
            opacity: 0.7,
          },
          format: '{point.percentage:.1f}%',
          filter: {
            operator: '>',
            property: 'percentage',
            value: 10,
          },
        },
      } as Highcharts.PlotPieOptions, // Specify the type assertion here
    },
    series: [
      {
        type: 'pie',
        name: 'Percentage',
        data: [
          {
            name: 'Water',
            y: 55.02,
          },
          {
            name: 'Fat',
            sliced: true,
            selected: true,
            y: 26.71,
          },
          {
            name: 'Carbohydrates',
            y: 1.09,
          },
          {
            name: 'Protein',
            y: 15.5,
          },
          {
            name: 'Ash',
            y: 1.68,
          },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
