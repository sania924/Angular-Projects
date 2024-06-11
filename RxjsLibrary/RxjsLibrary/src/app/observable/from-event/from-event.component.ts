import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss',
})
export class FromEventComponent implements AfterViewInit, OnInit {
  constructor(private service: FromeventService) {} // if want to use service  //step1

  @ViewChild('addBtn') addBtn!: ElementRef; //step2 to fetch templete reference to viewchild fr changing dom elements
  ngAfterViewInit(): void {
    //step 3 use this hook for viewchild
    let Count: number = 1; //take a coount varable
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      //step4 use fromevent takes 2 value 1:target and 2: event  ==> use this event instead of hostlister
      let countVal = 'video ' + Count++; //step7
      console.log(countVal); // incrate count in console

      this.appendItem(countVal, 'elContainer'); //call apend method   and id 1 //step 8
      this.appendItem(countVal, 'elContainer2'); //id2
      // step2 => in service
      //   use service ==> step3
      // these lines for service if you want to create service and dynamic show data
      // then apeenditem cut from here and paste in service and fetch apeenditem method from service

      // this.service.appendItem(countVal, 'elContainer');
      // this.service.appendItem(countVal, 'elContainer2');
    });
  }
  ngOnInit(): void {}
  // step6
  // create a method for append ist items
  appendItem(val: any, containerId: any) {
    //tale a val argument to pass value and iff want to add another list so take container id
    const el = document.createElement('li'); //for create li item
    // el.innerText = 'video1'; //giver ineertext in list
    el.innerText = val;
    // document.getElementById('elContainer')?.appendChild(el); // apendchild for single id
    document.getElementById(containerId)?.appendChild(el); // apendchild for multiple id
  }
}
