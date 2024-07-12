import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../includes/header/header.component';

@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [FormsModule, JsonPipe, RouterLink, RouterOutlet, HeaderComponent],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.scss',
})
export class TemplateformComponent {
  formModel = {
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agree: false,
  };
  formValue: any;
  onSubmit() {
    this.formValue = this.formModel;
    console.log('Form Submitted!', this.formModel);
  }
  reset() {
    this.formModel = {
      firstName: '',
      lastName: '',
      username: '',
      city: '',
      state: '',
      zip: '',
      agree: false,
    };
  }
}
