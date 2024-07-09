import { Routes } from '@angular/router';
import { IfelseComponent } from './structuralDirective/ifelse/ifelse.component';
import { NgclassNgstyleComponent } from './structuralDirective/ngclass-ngstyle/ngclass-ngstyle.component';
import { TablesComponent } from './primengpractice/tables/tables.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetApiComponent } from './Api-integration/get-api/get-api.component';
import { PostApiComponent } from './Api-integration/post-api/post-api.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';

export const routes: Routes = [
  { path: '', component: IfelseComponent },
  { path: 'ngclass-ngstyle', component: NgclassNgstyleComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'templateform', component: TemplateformComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'get-api', component: GetApiComponent },
  { path: 'post-api', component: PostApiComponent },
  { path: 'alert', component: AlertComponent }, //for @input
  { path: 'button', component: ButtonComponent }, //for @output
];
