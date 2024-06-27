import { Component, OnInit } from '@angular/core';
import { FromeventService } from '../../services/service/fromevent.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrl: './replaysubject.component.scss',
})
export class ReplaysubjectComponent implements OnInit {
  constructor(private service: FromeventService) {}
  // list
  user1list = ['angular 1', 'angular 2'];
  user2list: any[] = [];
  user3list: any[] = [];
  subscribemode2: boolean = true;
  subscribemode3: boolean = false;
  // subscription
  subscription2: Subscription = new Subscription();
  subscription3: Subscription = new Subscription();
  ngOnInit() {
    this.service.videoEmit.subscribe((res) => {
      console.log(res);
      this.user1list.push(res);
    });
  }
  onChange(input: any) {
    // console.log(input.value);
    this.service.videoEmit.next(input.value);
  }
  user2subscribe() {
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
    this.subscription2 = this.service.videoEmit.subscribe((res) =>
      this.user2list.push(res)
    );
    this.subscribemode2 = !this.subscribemode2;
  }
  user3subscribe() {
    this.subscribemode3 = !this.subscribemode3;
  }
}
