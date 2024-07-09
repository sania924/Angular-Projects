import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlertComponent } from '../../alert/alert.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    FormsModule,
    CommonModule,
    AlertComponent,
    ButtonComponent,
  ],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.scss',
})
export class PostApiComponent implements OnInit {
  // http://projectapi.gerasim.in/index.html use this api of complaint
  // step 1
  deptObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };

  private http = inject(HttpClient);

  ngOnInit() {
    this.getDepartment();
    // Initial setup if needed
  }

  onSave() {
    this.http
      .post(
        'http://projectapi.gerasim.in/api/Complaint/AddNewDepartment',
        this.deptObj
      )
      .subscribe({
        next: (res: any) => {
          if (res.result) {
            alert('Department created successfully');
            this.getDepartment();
          } else {
            alert(res.message);
          }
          console.log(res.data);
        },
        error: (err) => {
          console.error('Error occurred:', err);
          alert('An error occurred while creating the department.');
        },
      });
  }
  resetForm() {
    this.deptObj = {
      departmentId: 0,
      departmentName: '',
      departmentLogo: '',
    };
  }
  deptList: any[] = [];
  getDepartment() {
    this.http
      .get('http://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
      .subscribe((res: any) => {
        this.deptList = res.data;
      });
  }
  onEdit(data: any) {
    this.deptObj = data;
  }
  onUpdate() {
    this.http
      .post(
        'http://projectapi.gerasim.in/api/Complaint/UpdateDepartment',
        this.deptObj
      )
      .subscribe({
        next: (res: any) => {
          if (res.result) {
            alert('Department created successfully');
            this.getDepartment();
          } else {
            alert(res.message);
          }
          console.log(res.data);
        },
        error: (err) => {
          console.error('Error occurred:', err);
          alert('An error occurred while creating the department.');
        },
      });
  }
  onDelete(id: number) {
    // const isDelete=confirm ("Are you sure want to delete?")
    this.http
      .delete(
        'http://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId= ' +
          id
      )
      .subscribe({
        next: (res: any) => {
          if (res.result) {
            alert('Department created successfully');
            this.getDepartment();
          } else {
            alert(res.message);
          }
          console.log(res.data);
        },
      });
  }
}
