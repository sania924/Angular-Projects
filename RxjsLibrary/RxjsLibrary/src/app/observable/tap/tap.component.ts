import { Component, OnInit } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.scss',
})
export class TapComponent implements OnInit {
  constructor(private service: FromeventService) {}
  obsubscription!: Subscription;
  obsubscription2!: Subscription;
  mycolor: string = '';
  ngOnInit() {
    // const Arr = ['sana', 'ahmad', 'ali', 'saima', 'saira', 'usman', 'kiran'];
    // ex--01
    // const Source = interval(2000);
    const Source2 = interval(2000);

    // this.obsubscription = Source.pipe(
    //   tap((res) => {
    //     if (res == 4) {
    //       this.obsubscription.unsubscribe();
    //     }
    //   }),
    //   map((res) => Arr[res])
    // ).subscribe((res) => {
    //   console.log(res);
    //   this.service.appendItem(res, 'elContainer');
    // });
    // ex-2
    const Arr2 = ['red', 'green', 'pink', 'orange', 'blue', 'purple', 'grey'];
    // ex--02

    this.obsubscription2 = Source2.pipe(
      tap((res) => {
        this.mycolor = Arr2[res];
        if (res == 4) {
          this.obsubscription2.unsubscribe();
        }
      }),
      map((res) => Arr2[res])
    ).subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer2');
    });
  }
}
