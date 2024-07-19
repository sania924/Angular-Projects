import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TablesComponent } from '../../primengpractice/tables/tables.component';
import { ResponsivetableComponent } from '../../primengpractice/tables/responsivetable/responsivetable.component';

@Component({
  selector: 'app-primengpracticeheader',
  standalone: true,
  imports: [
    CommonModule,
    PrimengpracticeheaderComponent,
    RouterLink,
    RouterOutlet,
    TablesComponent,
    ResponsivetableComponent,
  ],
  templateUrl: './primengpracticeheader.component.html',
  styleUrl: './primengpracticeheader.component.scss',
})
export class PrimengpracticeheaderComponent {}
