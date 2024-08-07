import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  items: { icon: string; title: string; link: string }[] = [
    { icon: 'team_dashboard', title: 'Dashboard', link: 'dashboard' },
    { icon: 'content_copy', title: 'Content', link: 'content' },
    { icon: 'pie_chart', title: 'Analytics', link: 'analytics' },
    { icon: 'chat', title: 'Comments', link: 'comments' },
  ];
}
