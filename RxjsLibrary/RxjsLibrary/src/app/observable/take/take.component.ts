import { Component, OnInit } from '@angular/core';
import {
  from,
  fromEvent,
  interval,
  map,
  take,
  takeLast,
  takeUntil,
  timer,
} from 'rxjs';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrl: './take.component.scss',
})
export class TakeComponent implements OnInit {
  constructor(private service: FromeventService) {}
  RandomNames = ['sania', 'rabia', 'sana', 'Samia', 'Sara', 'Ahmad'];
  ngOnInit(): void {
    //  Ex 1 | take (5)
    const nameSource = from(this.RandomNames);
    nameSource.pipe(take(5)).subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer');
    });
    // Take last ex-2
    nameSource.pipe(takeLast(3)).subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer2');
    });
    // ex-3 take until
    let condition = timer(3000);
    let condition2 = fromEvent(document, 'click');
    let Source = interval(1000);
    Source.pipe(
      map((res) => 'Number ' + res),
      takeUntil(condition2)
    ).subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer3');
    });
  }
}
