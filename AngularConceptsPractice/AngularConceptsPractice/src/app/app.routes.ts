import { Routes } from '@angular/router';
import { IfelseComponent } from './structuralDirective/ifelse/ifelse.component';
import { NgclassNgstyleComponent } from './structuralDirective/ngclass-ngstyle/ngclass-ngstyle.component';
import { TemplateformComponent } from './angularConceptsPractice/templateform/templateform.component';
import { ReactiveFormComponent } from './angularConceptsPractice/reactive-form/reactive-form.component';
import { GetApiComponent } from './Api-integration/get-api/get-api.component';
import { PostApiComponent } from './Api-integration/post-api/post-api.component';
import { AlertComponent } from './angularConceptsPractice/alert/alert.component';
import { ButtonComponent } from './angularConceptsPractice/button/button.component';
import { HeaderComponent } from './includes/header/header.component';

import { ViewchildComponent } from './angularConceptsPractice/decorators/viewchild/viewchild.component';
import { PipeComponent } from './angularConceptsPractice/pipe/pipe.component';

export const routes: Routes = [
  { path: '', component: IfelseComponent },
  { path: 'header', component: HeaderComponent },

  { path: 'ngclass-ngstyle', component: NgclassNgstyleComponent },
  { path: 'templateform', component: TemplateformComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'get-api', component: GetApiComponent },
  { path: 'post-api', component: PostApiComponent },
  { path: 'viewchild', component: ViewchildComponent },
  { path: 'alert', component: AlertComponent }, //for @input
  { path: 'button', component: ButtonComponent }, //for @output
  { path: 'pipe', component: PipeComponent }, //for @output
  { path: '', redirectTo: '/primengpractice', pathMatch: 'full' }, // Default redirect
];
