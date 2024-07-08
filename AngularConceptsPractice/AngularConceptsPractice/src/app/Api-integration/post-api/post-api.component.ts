import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.scss',
})
export class PostApiComponent implements OnInit {
  deptObj: any = {
    departmentId: 0,
    departmentName: 'string',
    departmentLogo: 'string',
  };
  http = inject(HttpClient);
  ngOnInit() {
    this.getDepartment();
  }
  onSave() {
    debugger;
    this.http
      .post(
        'http://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
        this.deptObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          debugger;
          alert('depRTMENT IS POSTED');
          debugger;
          this.getDepartment();
        } else {
          alert(res.messaage);
        }
        console.log(res);
      });
  }
  getDepartment() {
    this.http
      .get('http://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
      .subscribe((res: any) => {
        debugger;
        this.deptObj = res.departmentName;
        debugger;
      });
  }
}
