import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FromeventService {
  constructor() {}

  appendItem(val: any, containerId: any) {
    //tale a val argument to pass value and iff want to add another list so take container id
    const el = document.createElement('li'); //for create li item
    // el.innerText = 'video1'; //giver ineertext in list
    el.innerText = val;
    // document.getElementById('elContainer')?.appendChild(el); // apendchild for single id
    document.getElementById(containerId)?.appendChild(el); // apendchild for multiple id
  }
}
