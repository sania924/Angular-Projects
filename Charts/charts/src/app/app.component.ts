import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MasterService } from './_service/master.service';
import { salesdata } from './_model/salesdata';
Chart.register(...registerables);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'charts';
  chartdata: salesdata[] = [];
  labeldata: number[] = [];
  realdata: number[] = [];
  colordata: string[] = [];

  constructor(private service: MasterService) {}
  ngOnInit(): void {
    this.loadchartdata();
  }
  loadchartdata() {
    this.service.LoadSales().subscribe((item) => {
      this.chartdata = item;
      if (this.chartdata != null) {
        this.chartdata.map((o) => {
          this.labeldata.push(o.year);
          this.realdata.push(o.amount);
          this.colordata.push(o.colorcode);
        });
        this.Renderbarchart(this.labeldata, this.realdata, this.colordata);
        this.Renderpiechart(this.labeldata, this.realdata, this.colordata);
        this.Renderdoughnutchart(this.labeldata, this.realdata, this.colordata);
        this.Renderpolarchart(this.labeldata, this.realdata, this.colordata);
        this.Renderradarchart(this.labeldata, this.realdata, this.colordata);
        this.Renderrlinechart(this.labeldata, this.realdata, this.colordata);
      }
    });
  }
  // bar chart
  Renderbarchart(labeldata: any, valuedata: any, colordata: any) {
    this.RenderChart(labeldata, valuedata, colordata, 'barchart', 'bar');
  }
  // piechart
  Renderpiechart(labeldata: any, valuedata: any, colordata: any) {
    this.RenderChart(labeldata, valuedata, colordata, 'piechart', 'pie');
  }
  // dounat chart
  Renderdoughnutchart(labeldata: any, valuedata: any, colordata: any) {
    this.RenderChart(
      labeldata,
      valuedata,
      colordata,
      'doughnutchart',
      'doughnut'
    );
  }
  // Polar Area chart
  Renderpolarchart(labeldata: any, valuedata: any, colordata: any) {
    this.RenderChart(
      labeldata,
      valuedata,
      colordata,
      'polarchart',
      'polarArea'
    );
  }
  // Radar chart
  Renderradarchart(labeldata: any, valuedata: any, colordata: any) {
    this.RenderChart(labeldata, valuedata, colordata, 'radarchart', 'radar');
  }
  // line chart
  Renderrlinechart(labeldata: any, valuedata: any, colordata: any) {
    this.RenderChart(labeldata, valuedata, colordata, 'linechart', 'line');
  }

  Renderbubblechart(labeldata: any, valuedata: any, colordata: any) {
    this.RenderChart(labeldata, valuedata, colordata, 'bubblechart', 'pie');
  }
  RenderChart(
    labeldata: any,
    valuedata: any,
    colordata: any,
    chartid: string,
    charttype: any
  ) {
    const mychart = new Chart(chartid, {
      type: charttype,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'Sales',
            // data: this.chartdata.map((item) => item.amount),
            // backgroundColor: this.chartdata.map((item) => item.colorcode),
            // borderColor: this.chartdata.map((item) => item.colorcode),
            borderWidth: 1,
            data: valuedata,
            backgroundColor: colordata,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
