import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrl: './concat.component.scss',
})
export class ConcatComponent implements OnInit {
  constructor(private service: FromeventService) {}
  ngOnInit() {
    const SourceTech = interval(1000).pipe(
      map((v) => 'Tech video #' + (v + 1)),
      take(5)
    );
    const SourceComedy = interval(1000).pipe(
      map((v) => 'Comedy video #' + (v + 1)),
      take(5)
    );
    const SourceNews = interval(1000).pipe(
      map((v) => 'News video #' + (v + 1)),
      take(5)
    );
    const FinalObs = concat(SourceTech, SourceComedy, SourceNews);
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
