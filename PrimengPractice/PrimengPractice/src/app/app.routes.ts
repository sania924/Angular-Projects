import { Routes } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { FilterTableComponent } from './TableComponents/filter-table/filter-table.component';
import { PaginatorTableComponent } from './TableComponents/paginator-table/paginator-table.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', component: FilterTableComponent },
  { path: 'paginator-table', component: PaginatorTableComponent },
];
