import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingPracticeComponent } from './data-binding/databinding-practice/databinding-practice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatabindingPracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularConceptsPractice';
}
