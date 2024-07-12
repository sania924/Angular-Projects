import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { TablesComponent } from './primengpractice/tables/tables.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './includes/header/header.component';
import { PrimengpracticeComponent } from './primengpractice/primengpractice/primengpractice.component';
import { PrimengpracticeheaderComponent } from './includes/primengpracticeheader/primengpracticeheader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TablesComponent,
    CommonModule,
    RouterLink,
    HeaderComponent,
    PrimengpracticeComponent,
    PrimengpracticeheaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  [x: string]: any;
  title = 'AngularConceptsPractice';
}
