import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrl: './combinelatest.component.scss',
})
export class CombinelatestComponent implements AfterViewInit {
  nameSource = ['sania', 'sana', 'ahmad', 'sara', 'yousaf', 'ali'];
  colorSource = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];
  @ViewChild('name') name!: ElementRef;
  @ViewChild('color') color!: ElementRef;
  ngAfterViewInit(): void {
    const nameobs = fromEvent<any>(this.name.nativeElement, ' change').pipe(
      map((event) => event.target.value)
    );
    // .subscribe(res=>{console.log(res)})
    const colorobs = fromEvent<any>(this.color.nativeElement, ' change').pipe(
      map((event) => event.target.value)
    );
    // .subscribe(res=>{console.log(res)})
    combineLatest(nameobs, colorobs).subscribe(([name, color]) => {
      console.log(name, color);
      this.createBox(name, color, 'elContainer');
    });
  }
  createBox(name: any, color: any, containerId: any) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute('class', 'color');
    document.getElementById(containerId)?.appendChild(el);
  }
  // master=> nameObs
  // color:colorobs
}
