import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

HC_exporting(Highcharts);
HC_exportData(Highcharts);

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.scss',
})
export class BarchartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Historic World Population by Region',
      align: 'left',
    },
    subtitle: {
      text: 'Source: <a href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population" target="_blank">Wikipedia.org</a>',
      align: 'left',
    },
    xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe'],
      title: {
        text: null,
      },
      gridLineWidth: 1,
      lineWidth: 0,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population (millions)',
        align: 'high',
      },
      labels: {
        overflow: 'justify',
      },
      gridLineWidth: 0,
    },
    tooltip: {
      valueSuffix: ' millions',
    },
    plotOptions: {
      bar: {
        borderRadius: 5, // Setting borderRadius to 5 for Angular Highcharts
        dataLabels: {
          enabled: true,
        },
        groupPadding: 0.1,
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: 'bar',

        name: 'Year 1990',
        data: [632, 727, 3202, 721],
      },
      {
        type: 'bar',

        name: 'Year 2000',
        data: [814, 841, 3714, 726],
      },
      {
        type: 'bar',

        name: 'Year 2021',
        data: [1393, 1031, 4695, 745],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
