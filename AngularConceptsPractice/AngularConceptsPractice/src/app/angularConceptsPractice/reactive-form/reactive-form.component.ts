import { Component } from '@angular/core';
import { HeaderComponent } from '../../includes/header/header.component';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {}
