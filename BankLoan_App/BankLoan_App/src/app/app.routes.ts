import { Routes } from '@angular/router';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { ApplicationlistComponent } from './pages/applicationlist/applicationlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'loanapplication', pathMatch: 'full' },
  { path: 'loanapplication', component: LoanApplicationComponent },
  { path: 'applicationlist', component: ApplicationlistComponent },
];
