import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../includes/header/header.component';

@Component({
  selector: 'app-ngclass-ngstyle',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    HeaderComponent,
  ],
  templateUrl: './ngclass-ngstyle.component.html',
  styleUrl: './ngclass-ngstyle.component.scss',
})
export class NgclassNgstyleComponent {
  Div1: string = 'bg-primary'; //variable pass directly class
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
    this.Div1 = 'bg-danger';
  }
  hideDiv1() {
    this.Div1 = 'bg-success';
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
