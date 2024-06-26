import { Component, OnDestroy, OnInit } from '@angular/core';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent implements OnInit, OnDestroy {
  userName!: string;
  constructor(private service: FromeventService) {
    this.service.userName.subscribe((res) => {
      console.log(res);
      this.userName = res;
    });
  }
  ngOnInit() {
    this.service.exclusive.next(true);
  }
  ngOnDestroy() {
    this.service.exclusive.next(false); //when move to other comp it destroy the service
  }
}
// suject is observable and observer and communication b/w multiple comps
// create subject in service where show data use subscribe like observable
// where used the data ex show exclusive in subject com only use next
