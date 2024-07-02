import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
// import HighchartsDataLabels from 'highcharts/modules/data-labels';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

// HighchartsDataLabels(Highcharts);
HC_exporting(Highcharts);
HC_exportData(Highcharts);

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrl: './piechart.component.scss',
})
export class PiechartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    const baseColor = Highcharts.getOptions().colors[0];
    const colors = Highcharts.getOptions().colors.map((c, i) =>
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      Highcharts.color(baseColor)
        .brighten((i - 3) / 7)
        .get()
    );

    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
      },
      title: {
        text: 'Browser market shares in February, 2022',
        align: 'left',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      accessibility: {
        point: {
          valueSuffix: '%',
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          colors: colors,
          borderRadius: 5,
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4,
            },
          },
        },
      },
      series: [
        {
          name: 'Share',
          type: 'pie',
          data: [
            { name: 'Chrome', y: 74.03 },
            { name: 'Edge', y: 12.66 },
            { name: 'Firefox', y: 4.96 },
            { name: 'Safari', y: 2.49 },
            { name: 'Internet Explorer', y: 2.31 },
            { name: 'Other', y: 3.398 },
          ],
        },
      ],
    };
  }

  ngOnInit(): void {}
}
