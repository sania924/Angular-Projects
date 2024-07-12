import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TablesComponent } from '../tables/tables.component';
import { PrimengpracticeheaderComponent } from '../../includes/primengpracticeheader/primengpracticeheader.component';

@Component({
  selector: 'app-primengpractice',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule,
    TablesComponent,
    PrimengpracticeheaderComponent,
  ],
  templateUrl: './primengpractice.component.html',
  styleUrl: './primengpractice.component.scss',
})
export class PrimengpracticeComponent {}
