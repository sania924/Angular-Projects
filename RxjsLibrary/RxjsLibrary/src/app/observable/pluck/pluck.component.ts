import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.scss',
})
export class PluckComponent implements OnInit {
  data: any;
  data2: any;
  users = [
    {
      name: 'sania',
      skills: 'angular',
      job: { title: 'fronend developer', ex: '10 yeares' },
    },
    {
      name: 'ahmad',
      skills: 'javascript',
      job: { title: 'java developer', ex: '5 yeares' },
    },
    {
      name: 'ali',
      skills: 'typescript',
      job: { title: 'backend developer', ex: '3 yeares' },
    },
    {
      name: 'samia',
      skills: 'react',
      job: { title: 'fullstack developer', ex: '4 yeares' },
    },
    {
      name: 'toba',
      skills: 'vue',
      job: { title: 'backend developer', ex: '2 yeares' },
    },
  ];
  ngOnInit(): void {
    // ex-1
    from(this.users)
      .pipe(
        // map((data) => data.skills), //tranform data annd get propeety of array
        pluck('skills'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });
    // ex-2
    // access nested obj property title we can't directly access title bcz pluck only work with root not nested so we can ue it with 'job', 'title'
    from(this.users)
      .pipe(
        // map((data) => data.skills), //tranform data annd get propeety of array
        pluck('job', 'title'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.data2 = res;
      });
  }
}
