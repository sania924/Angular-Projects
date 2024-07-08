import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IfelseComponent } from './structuralDirective/ifelse/ifelse.component';
import { NgclassNgstyleComponent } from './structuralDirective/ngclass-ngstyle/ngclass-ngstyle.component';
import { TablesComponent } from './primengpractice/tables/tables.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IfelseComponent,
    NgclassNgstyleComponent,
    TablesComponent,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  [x: string]: any;
  title = 'AngularConceptsPractice';
}
