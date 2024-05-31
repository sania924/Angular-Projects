import { Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ContentComponent } from './content/content.component';
import { CommentsComponent } from './comments/comments.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'content', component: ContentComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'dashboard', component: DashboardComponent },
];
