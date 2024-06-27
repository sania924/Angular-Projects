import { Component } from '@angular/core';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-asyncsubject',
  templateUrl: './asyncsubject.component.html',
  styleUrl: './asyncsubject.component.scss',
})
export class AsyncsubjectComponent {
  constructor(private service: FromeventService) {}
  // list
  user1list = ['angular 1', 'angular 2'];
  asyncvideoEmit!: string;
  ngOnInit() {
    this.service.asyncvideoEmit.subscribe((res) => {
      console.log(res);
      this.asyncvideoEmit = res;
    });
  }
  onChange(input: any) {
    console.log(input.value);
    this.service.asyncvideoEmit.next(input.value);
  }
  onComplete() {
    this.service.asyncvideoEmit.complete();
  }
}
