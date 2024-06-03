import { Component } from '@angular/core';
// import { ChartData } from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-subscriber-chart',
  standalone: true,
  // imports: [BaseChartDirective],
  templateUrl: './subscriber-chart.component.html',
  styleUrl: './subscriber-chart.component.scss',
})
export class SubscriberChartComponent {
  // data: ChartData<'bar'> = {
  //   labels: [
  //     'January',
  //     'February',
  //     'March',
  //     'April',
  //     'May',
  //     'June',
  //     'July',
  //     'August',
  //     'September',
  //     'October',
  //     'November',
  //     'December',
  //   ],
  //   datasets: [
  //     { data: this.getsub(), label: 'Sub' },
  //     { data: this.getwacthctime(), label: 'Watimetch' },
  //   ],
  // };

  getsub(): number[] {
    return [200, 100, 300, 499, 659, 23, 124, 112, 100, 12, 23, 323];
  }

  getwacthctime(): number[] {
    return [200, 90, 310, 499, 659, 23, 124, 112, 100, 12, 223, 323];
  }
}
