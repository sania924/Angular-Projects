import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../includes/header/header.component';
import { PrimengpracticeheaderComponent } from '../../includes/primengpracticeheader/primengpracticeheader.component';
import { TablesComponent } from '../tables/tables.component';
import { TemplatetableComponent } from '../tables/templatetable/templatetable.component';
import { ResponsivetableComponent } from '../tables/responsivetable/responsivetable.component';

@Component({
  selector: 'app-primengpractice',
  standalone: true,
  imports: [
    CommonModule,
    PrimengpracticeComponent,
    RouterLink,
    RouterOutlet,
    HeaderComponent,
    PrimengpracticeheaderComponent,
    TablesComponent,
    TemplatetableComponent,
    ResponsivetableComponent,
  ],
  templateUrl: './primengpractice.component.html',
  styleUrl: './primengpractice.component.scss',
})
export class PrimengpracticeComponent {}
