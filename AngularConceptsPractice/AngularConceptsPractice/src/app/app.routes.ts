import { Routes } from '@angular/router';
import { IfelseComponent } from './structuralDirective/ifelse/ifelse.component';
import { NgclassNgstyleComponent } from './structuralDirective/ngclass-ngstyle/ngclass-ngstyle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from './primengpractice/tables/tables.component';
import { TemplateformComponent } from './templateform/templateform.component';

export const routes: Routes = [
  { path: '', component: IfelseComponent },
  { path: 'ngclass-ngstyle', component: NgclassNgstyleComponent },
  { path: 'reactiveform', component: ReactiveFormsModule },
  { path: 'tables', component: TablesComponent },
  { path: 'templateform', component: TemplateformComponent },
];
