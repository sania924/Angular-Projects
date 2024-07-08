import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.scss',
})
export class IfelseComponent {
  Div1: boolean = true;
  Div2: boolean = true;
  num1: string = '';
  num2: string = '';
  isactive: boolean = true;
  selectedstate: string = '';
  cityArray: string[] = ['burewala', 'lahore', 'multan', 'karachi']; //aray show method
  stdList: any[] = [
    { id: 1, name: 'sana', city: 'burewala' },
    { id: 2, name: 'samieena', city: 'Lahore' },
    { id: 3, name: 'ali', city: 'larachi' },
    { id: 4, name: 'ahmad', city: 'multan' },
  ];
  showDiv1() {
    this.Div1 = false;
  }
  hideDiv1() {
    this.Div1 = true;
  }
  toggle() {
    this.Div2 = !this.Div2;
    // if (this.Div2 == true) {
    //   this.Div2 = false;
    // } else {
    //   this.Div2 = true;
    // }
  }
}
