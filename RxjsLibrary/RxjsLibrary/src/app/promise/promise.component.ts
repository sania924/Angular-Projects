import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss',
})
export class PromiseComponent implements OnInit {
  dellAvailable() {
    return false;
  }
  hpAvailable() {
    return true;
  }
  promiseVal: any;

  dell = {
    name: 'dell',
    price: 5000,
  };

  hp = {
    name: 'hp',
    price: 50000,
  };
  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        return setTimeout(() => {
          resolve('dell is purchased');
        }, 3000);
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          resolve('hp is purchased');
          // resolve(this.hp); // for show obj data
        }, 3000);
      } else {
        return setTimeout(() => {
          reject('laptop is not available');
        }, 3000);
      }
    });
    buyLaptop
      .then((data) => {
        console.log('then code =>', data);
        this.promiseVal = data;
      })
      .catch((err) => {
        console.log('catch code =>', err);

        this.promiseVal = err;
      });
  }
}
