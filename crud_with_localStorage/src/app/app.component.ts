import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './Student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'crud_with_localStorage';
  studentObj: Student = new Student();
  isModalOpen = false;
  studentList: Student[] = [];
  ngOnInit() {
    const localdata = localStorage.getItem('angular17crud');
    if (localdata != null) {
      this.studentList = JSON.parse(localdata);
    }
  }
  openModal() {
    this.studentObj = new Student();
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  save() {
    // Debugging statement to pause code execution and inspect variables (useful during development)

    // Retrieve the existing data from local storage with the key 'angular17crud'
    const isLocalPresent = localStorage.getItem('angular17crud');

    // Check if data is already present in local storage
    if (isLocalPresent != null) {
      // If data exists, parse the JSON string into a JavaScript array
      const oldArray = JSON.parse(isLocalPresent);

      // Add the current student object (this.studentObj) to the existing array
      oldArray.push(this.studentObj);
      this.studentList = oldArray;
      // Convert the updated array back to a JSON string and save it in local storage
      localStorage.setItem('angular17crud', JSON.stringify(oldArray));
    } else {
      // If no data exists in local storage, create a new empty array
      const newArr = [];

      // Add the current student object (this.studentObj) to the new array
      newArr.push(this.studentObj);
      this.studentList = newArr;

      // Convert the new array to a JSON string and save it in local storage
      localStorage.setItem('angular17crud', JSON.stringify(newArr));
    }
    this.closeModal();
  }
}
