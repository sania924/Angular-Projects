import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  data: any;
  data2: any;
  data3: any;
  dataArr = [
    { id: '1', name: 'Ahmad', gender: 'Male' },
    { id: '2', name: 'Hassan', gender: 'Male' },
    { id: '3', name: 'Jaweed', gender: 'Male' },
    { id: '4', name: 'sana', gender: 'female' },
    { id: '5', name: 'ali', gender: 'Male' },
    { id: '6', name: 'Salman', gender: 'Male' },
    { id: '7', name: 'sameena', gender: 'female' },
    { id: '8', name: 'kiran', gender: 'female' },
    { id: '9', name: 'anila', gender: 'female' },
    { id: '10', name: 'faiza', gender: 'female' },
  ];
  ngOnInit(): void {
    const source = from(this.dataArr);
    // ex-1 filter by length
    source
      .pipe(
        filter((member) => member.name.length > 4),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });

    // ex-2 filter by gender
    source
      .pipe(
        filter((member) => member.gender == 'Male'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });
    // ex-2 filter by nth item like id=6
    source
      .pipe(
        filter((member) => member.id <= '3 + 1'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data3 = res;
      });
  }
}
