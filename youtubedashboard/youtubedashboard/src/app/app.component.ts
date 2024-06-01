import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LatestVideoComponent } from './latest-video/latest-video.component';
import { PublishedVideosComponent } from './published-videos/published-videos.component';
import { LatestCommentsComponent } from './latest-comments/latest-comments.component';
import { AudienceChartComponent } from './audience-chart/audience-chart.component';
import { SubscriberChartComponent } from './subscriber-chart/subscriber-chart.component';
import { RevenueChartComponent } from './revenue-chart/revenue-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    PageHeaderComponent,
    SidebarComponent,
    DashboardComponent,
    LatestVideoComponent,
    PublishedVideosComponent,
    LatestCommentsComponent,
    AudienceChartComponent,
    SubscriberChartComponent,
    RevenueChartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'youtubedashboard';
}
