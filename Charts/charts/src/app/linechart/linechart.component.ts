import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

HC_exporting(Highcharts);
HC_exportData(Highcharts);

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.scss',
})
export class LinechartComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Solar Employment Growth by Sector, 2010-2016',
    },
    credits: { enabled: true },
    subtitle: {
      text: 'Source: thesolarfoundation.com',
    },
    yAxis: {
      title: {
        text: 'Number of Employees',
      },
    },
    xAxis: {
      title: {
        text: 'Years',
      },
    },
    tooltip: {
      shadow: false,
      backgroundColor: '#3333',
      style: { color: 'green' },
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },
    series: [
      {
        type: 'line',
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
      {
        type: 'line',
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
      },
      {
        type: 'line',

        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
      },
      {
        type: 'line',
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
      },
      {
        type: 'line',

        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'vertical',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };
}
