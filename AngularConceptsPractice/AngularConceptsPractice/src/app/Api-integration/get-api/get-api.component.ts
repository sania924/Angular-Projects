import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../angularConceptsPractice/alert/alert.component';
import { ButtonComponent } from '../../angularConceptsPractice/button/button.component';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule, AlertComponent, ButtonComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.scss',
})
export class GetApiComponent {
  users: any[] = [];
  constructor(private http: HttpClient) {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.users = res;
        console.log(res);
      });
  }
  getdata(event: any) {
    console.log(event);
  }
  // getalluser() {}
}
