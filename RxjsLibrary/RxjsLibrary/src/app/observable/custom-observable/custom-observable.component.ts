import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FromeventService } from '../../services/service/fromevent.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrl: './custom-observable.component.scss',
})
export class CustomObservableComponent implements OnInit {
  techStatus: string = '';
  customObservable: Observable<string>;

  constructor(private service: FromeventService) {
    this.customObservable = new Observable((observer) => {
      observer.next('Angular');
      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);
      setTimeout(() => {
        observer.next('html and css');
        // observer.error(new Error('limit Exeed'));
      }, 3000);
      setTimeout(() => {
        observer.next('Javascript');
      }, 4000);
      setTimeout(() => {
        observer.next('react value');
      }, 5000);
      setTimeout(() => {
        observer.next('vue value');
        observer.complete();
      }, 6000);
    });
  }

  ngOnInit() {
    this.customObservable.subscribe(
      (res) => {
        console.log(res);
        this.service.appendItem(res, 'elContainer');
      },
      (err) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );
  }
}
// subscribe take 3 thing 1) data 2) error  3) commplete
// imp note always take error and complete in subscribe bcz it is recomended if not then error and cpmplete both execute
// in complete use () but in error use err
// next is used to emit data
//     this.customObservable = new Observable((observer) => {
// use new method instead of create method
