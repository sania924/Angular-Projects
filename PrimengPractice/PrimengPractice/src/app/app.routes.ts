import { Routes } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { FilterTableComponent } from './TableComponents/filter-table/filter-table.component';
import { PaginatorTableComponent } from './TableComponents/paginator-table/paginator-table.component';
import { BasicFormComponent } from './FormComponents/basic-form/basic-form.component';
import { DataviewComponent } from './TableComponents/dataview/dataview.component';
import { TreetableComponent } from './TableComponents/treetable/treetable.component';
import { PanelComponent } from './PanelComponents/panel/panel.component';
import { AdvancePanelComponent } from './PanelComponents/advance-panel/advance-panel.component';
import { MenubarComponent } from './MenuComponents/menubar/menubar.component';
import { AdvanceMenuComponent } from './MenuComponents/advance-menu/advance-menu.component';

export const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', component: FilterTableComponent },
  { path: 'dataview', component: DataviewComponent },

  { path: 'paginator-table', component: PaginatorTableComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'treetable', component: TreetableComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'advance-panel', component: AdvancePanelComponent },
  { path: 'menubar', component: MenubarComponent },
  { path: 'advance-menu', component: AdvanceMenuComponent },
];
