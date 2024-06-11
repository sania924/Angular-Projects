import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss',
})
export class ToArrayComponent implements OnInit {
  users = [
    { name: 'sania', skills: 'angular' },
    { name: 'sana', skills: 'react' },
    { name: 'ahmad', skills: 'vue' },
  ];
  sourceSub!: Subscription;
  ngOnInit() {
    // example  1
    const source = interval(1000);
    source
      .pipe(
        take(5), // for op chaning
        toArray()
      ) //used to convert in array
      .subscribe((res) => {
        console.log(res);
        // if (res >= 8) {
        //   this.sourceSub.unsubscribe();
        // }
      });
    // example 2

    const source2 = from(this.users); //from used to convert  data in observable stream
    source2.pipe(toArray()).subscribe((res) => {
      //if want to convert observable stream into array
      console.log(res);
    });
    // example 3

    const source3 = of('sania', 'sana', 'ali'); //from used to convert  data in observable stream
    source3.pipe(toArray()).subscribe((res) => {
      //if want to convert observable stream into array
      console.log(res);
    });
  }
}
