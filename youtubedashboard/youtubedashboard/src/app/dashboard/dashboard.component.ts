import { Component } from '@angular/core';
import { AudienceChartComponent } from '../audience-chart/audience-chart.component';
import { LatestCommentsComponent } from '../latest-comments/latest-comments.component';
import { LatestVideoComponent } from '../latest-video/latest-video.component';
import { PublishedVideosComponent } from '../published-videos/published-videos.component';
import { RevenueChartComponent } from '../revenue-chart/revenue-chart.component';
import { SubscriberChartComponent } from '../subscriber-chart/subscriber-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AudienceChartComponent,
    LatestCommentsComponent,
    LatestVideoComponent,
    PublishedVideosComponent,
    RevenueChartComponent,
    SubscriberChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
