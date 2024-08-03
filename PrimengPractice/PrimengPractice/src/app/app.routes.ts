import { Routes } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { FilterTableComponent } from './TableComponents/filter-table/filter-table.component';
import { PaginatorTableComponent } from './TableComponents/paginator-table/paginator-table.component';
import { BasicFormComponent } from './FormComponents/basic-form/basic-form.component';
import { DataviewComponent } from './TableComponents/dataview/dataview.component';
import { TreetableComponent } from './TableComponents/treetable/treetable.component';
import { PanelComponent } from './PanelComponents/panel/panel.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', component: FilterTableComponent },
  { path: 'dataview', component: DataviewComponent },

  { path: 'paginator-table', component: PaginatorTableComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'treetable', component: TreetableComponent },
  { path: 'panel', component: PanelComponent },
];
