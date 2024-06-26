import { Component, OnInit } from '@angular/core';
import { of, from, map, switchMap, switchAll, delay } from 'rxjs';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrl: './switchmap.component.scss',
})
export class SwitchmapComponent implements OnInit {
  // switchmap take latest request and mostly used in search functionality
  constructor(private service: FromeventService) {}
  getData(data: any) {
    return of(data + 'Video uploaded').pipe(delay(200));
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

    // switch all
    Source.pipe(
      map((res) => this.getData(res)),
      switchAll() // used to switch all and not need to use double observable
    ).subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer2');
    });
    //  combine map+ switchall =switchmap => use merge map instead of merge all and map
    Source.pipe(switchMap((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer3');
    });
  }
}
