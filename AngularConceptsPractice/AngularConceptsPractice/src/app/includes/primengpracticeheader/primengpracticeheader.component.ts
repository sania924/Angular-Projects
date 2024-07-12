import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-primengpracticeheader',
  standalone: true,
  imports: [
    CommonModule,
    PrimengpracticeheaderComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './primengpracticeheader.component.html',
  styleUrl: './primengpracticeheader.component.scss',
})
export class PrimengpracticeheaderComponent {}
