import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { CapitalizeWordsPipe } from '../../capitalize-words.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    JsonPipe,
    DecimalPipe,
    CurrencyPipe,
    CapitalizeWordsPipe,
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss',
})
export class PipeComponent {
  userName: string = 'Angular';
  value: number = 1234;
  currentDate: Date = new Date();
  student: any = {
    name: 'Rahul',
    age: 20,
    phoneNo: 1234,
  };
  product: any = 12345;
}
