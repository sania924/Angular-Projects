import { Component, OnInit } from '@angular/core';
import { FromeventService } from '../../services/service/fromevent.service';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-ofandfrom',
  templateUrl: './ofandfrom.component.html',
  styleUrl: './ofandfrom.component.scss',
})
export class OfandfromComponent implements OnInit {
  obMsg: any;
  constructor(private service: FromeventService) {}
  ngOnInit() {
    // of operator example1

    const Ob1 = of('sania', 'rabia', 'sana');
    Ob1.subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer');
    });
    // example 2 with pass object
    const Ob2 = of({ a: 'sania', b: 'rabia', c: 'sana' });
    Ob2.subscribe((res) => {
      // console.log(res);
      this.obMsg = res;
      console.log(res);

      // this.service.appendItem(res, 'elContainer2');
    });

    // From -Array
    const Ob3 = from(['sania', 'rabia', 'sana']);
    Ob3.subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer3');
    });
    // from-promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('promise resolved');
      }, 3000);
    });
    // promise.then((res) => {
    //   console.log('promise data',res);
    // });
    const Ob4 = from(promise);
    Ob4.subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer4');
    });

    // From-string

    const Ob5 = from('String Data');
    Ob5.subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer5');
    });
  }
}
// of convert argument into observable stream like string value or object
//  from convert array.promise,string into observable stream
