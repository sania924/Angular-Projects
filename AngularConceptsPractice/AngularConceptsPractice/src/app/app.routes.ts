import { Routes } from '@angular/router';
import { IfelseComponent } from './structuralDirective/ifelse/ifelse.component';
import { NgclassNgstyleComponent } from './structuralDirective/ngclass-ngstyle/ngclass-ngstyle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from './primengpractice/tables/tables.component';

export const routes: Routes = [
  { path: 'ifelse', component: IfelseComponent },
  { path: 'ngclass-ngstyle', component: NgclassNgstyleComponent },
  { path: 'reactiveform', component: ReactiveFormsModule },
  { path: 'tables', component: TablesComponent },
];
