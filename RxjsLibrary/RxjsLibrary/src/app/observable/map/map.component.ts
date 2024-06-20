import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit {
  sub1!: Subscription;
  sub2!: Subscription;
  // messages
  msg1: any;
  msg2: any;
  constructor(private service: FromeventService) {}
  ngOnInit(): void {
    const broadCastVideos = interval(1000);
    // Ex ------1
    this.sub1 = broadCastVideos
      .pipe(map((data) => 'Video ' + data)) //use pipe and mostly op used in pipe
      .subscribe((res) => {
        // console.log(res);
        this.msg1 = res;
      });
    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 5000);
    // ex------2

    this.sub2 = broadCastVideos
      .pipe(map((data) => data * 10)) //use pipe and mostly op used in pipe multiply by 10
      .subscribe((res) => {
        console.log(res);
        this.msg2 = res;
      });
    setTimeout(() => {
      this.sub2.unsubscribe(); //unsubsribe after 10 sec
    }, 10000);
    // ex-3
    const members = from([
      { id: '1', name: 'sania' },
      { id: '2', name: 'sancia' },
      { id: '3', name: 'react' },
    ]);
    members.pipe(map((data) => data.name)).subscribe((res) => {
      //tranform obj data
      console.log(res);
      this.service.appendItem(res, 'elContainer'); //service method used
    });
  }
}
