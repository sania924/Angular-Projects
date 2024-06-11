import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrl: './interval-timer.component.scss',
})
export class IntervalTimerComponent implements OnInit {
  // interval call after some time every 1 sec new data create
  // step 1 create function of appenditem and service and use that serve
  constructor(private service: FromeventService) {}
  // step2
  objMsg: any;
  // step4 use subscription from rxjs
  videoSubscription!: Subscription;

  ngOnInit() {
    // step3  interval from rxjs in 1 sec
    // const broadCastVideos = interval(1000); //for interval take 1 argument

    const broadCastVideos = timer(3000, 1000); //use timer ist argument is delay and 2nd is interval

    // step 5 store in variable and subscribe that
    this.videoSubscription = broadCastVideos.subscribe((res) => {
      console.log(res);
      // take answer in res
      this.objMsg = 'Video ' + res;
      // use service function and for 3 container use 3 ids
      this.service.appendItem(this.objMsg, 'elContainer');

      this.service.appendItem(this.objMsg, 'elContainer2');
      this.service.appendItem(this.objMsg, 'elContainer3');
      // for unsubscribe the subscription
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
// TImer same but use timer instead of interval timer take 2 arguments delay and interval and interval take 1 argument
