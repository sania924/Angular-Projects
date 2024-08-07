import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrl: './mergemap.component.scss',
})
export class MergemapComponent implements OnInit {
  constructor(private service: FromeventService) {}
  getData(data: any) {
    return of(data + 'Video uploaded');
  }
  ngOnInit(): void {
    const Source = from(['Tech', 'Comedy', 'News']);
    // ex-1 map => flattern op use dobule observable to get the value to this overcome use merge all
    Source.pipe(map((res) => this.getData(res))).subscribe((res) =>
      res.subscribe((res2) => {
        console.log(res2);
        this.service.appendItem(res2, 'elContainer');
      })
    );

    // merge all
    Source.pipe(
      map((res) => this.getData(res)),
      mergeAll() // used to merge all and not need to use double observable
    ).subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer2');
    });
    //  combine map+ mergeall=mergemap => use merge map instead of merge all and map
    Source.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer3');
    });
  }
}
