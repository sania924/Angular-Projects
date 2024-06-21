import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
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
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {};
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.chartOptions = {
        chart: {
          type: 'area',
          // zoomType: 'x'  // Use 'zoomType' instead of 'zooming'
        },
        title: {
          text: 'USD to EUR exchange rate over time',
          align: 'left',
        },
        subtitle: {
          text:
            document.ontouchstart === undefined
              ? 'Click and drag in the plot area to zoom in'
              : 'Pinch the chart to zoom in',
          align: 'left',
        },
        xAxis: {
          type: 'datetime',
        },
        yAxis: {
          title: {
            text: 'Exchange rate',
          },
        },
        legend: {
          enabled: false,
        },
        // plotOptions: {
        //   area: {
        //     // fillColor: {
        //     //   linearGradient: {
        //     //     x1: 0,
        //     //     y1: 0,
        //     //     x2: 0,
        //     //     y2: 1,
        //     //   },
        //       // stops: [
        //       //   [0, Highcharts.getOptions().colors[0]], // No casting needed if colors array is correctly typed
        //       //   [
        //       //     1,
        //       //     Highcharts.color(Highcharts.getOptions().colors[0])
        //       //       .setOpacity(0)
        //       //       .get('rgba') as unknown as Highcharts.ColorType, // Use type assertion if necessary
        //       //   ],
        //       // ] as Highcharts.GradientColorStopObject[], // Ensure proper type for stops array
        //     },
        //     marker: {
        //       radius: 2,
        //     },
        //     lineWidth: 1,
        //     states: {
        //       hover: {
        //         lineWidth: 1,
        //       },
        //     },
        //     threshold: null,
        //   },
        // },
        series: [
          {
            type: 'area',
            name: 'USD to EUR',
            data: data,
          },
        ],
      };
    });
  }
}
