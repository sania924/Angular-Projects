import { Component, OnInit } from '@angular/core';
import { interval, map, take, merge } from 'rxjs';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.scss',
})
export class MergeComponent implements OnInit {
  constructor(private service: FromeventService) {}
  ngOnInit() {
    const SourceTech = interval(3000).pipe(
      map((v) => 'Tech video #' + (v + 1)),
      take(5)
    );
    const SourceComedy = interval(2000).pipe(
      map((v) => 'Comedy video #' + (v + 1)),
      take(5)
    );
    const SourceNews = interval(500).pipe(
      map((v) => 'News video #' + (v + 1)),
      take(5)
    );
    const FinalObs = merge(SourceTech, SourceComedy, SourceNews);
    FinalObs.subscribe((res) => {
      console.log(res);
      this.service.appendItem(res, 'elContainer');
    });
    // SourceComedy.subscribe((res) => {
    //   console.log(res);
    //   this.service.appendItem(res, 'elContainer');
    // });
    // SourceNews.subscribe((res) => {
    //   console.log(res);
    //   this.service.appendItem(res, 'elContainer');
    // });
  }
}
