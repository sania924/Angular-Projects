import { Component, OnInit } from '@angular/core';
import { of, from, map, concatAll, concatMap, delay } from 'rxjs';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-concatmap',
  templateUrl: './concatmap.component.html',
  styleUrl: './concatmap.component.scss',
})
export class ConcatmapComponent implements OnInit {
  constructor(private service: FromeventService) {}
  getData(data: any) {
    return of(data + 'Video uploaded');
  }
  ngOnInit(): void {
    const Source = from(['Tech', 'Comedy', 'News']).pipe(delay(2000));
    // ex-1 map => flattern op use dobule observable to get the value to this overcome use concat all
    Source.pipe(map((res) => this.getData(res))).subscribe((res) =>
      res.subscribe((res2) => {
        console.log(res2);
        this.service.appendItem(res2, 'elContainer');
      })
    );

    // merge all
    Source.pipe(
      map((res) => this.getData(res)),
      concatAll() // used to merge all and not need to use double observable
    ).subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer2');
    });
    //  combine map+ concatall=concatmap => use merge map instead of concat all and map
    Source.pipe(concatMap((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer3');
    });
  }
}
