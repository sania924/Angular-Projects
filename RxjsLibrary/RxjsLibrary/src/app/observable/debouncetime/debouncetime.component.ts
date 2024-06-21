import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrl: './debouncetime.component.scss',
})
export class DebouncetimeComponent implements AfterViewInit {
  constructor(private loadingBar: LoadingBarService) {}
  reqData: any = null;

  @ViewChild('myInput') myInput!: ElementRef;

  reqData2: any = null;

  @ViewChild('myInput2') myInput2!: ElementRef;
  ngAfterViewInit() {
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(500)
    );
    searchTerm.subscribe((res) => {
      console.log(res);
      this.reqData = res;
      this.loadingBar.start();

      setTimeout(() => {
        this.reqData = null;
        this.loadingBar.stop();
      }, 2000);
    });

    const searchTerm2 = fromEvent<any>(
      this.myInput2.nativeElement,
      'keyup'
    ).pipe(
      map((event) => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );
    searchTerm2.subscribe((res) => {
      console.log(res);
      this.reqData2 = res;
      setTimeout(() => {
        this.reqData2 = null;
      }, 1000);
    });
  }
}
