import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LimitPipe } from '../limit.pipe';

@Component({
  selector: 'app-latest-video',
  standalone: true,
  imports: [RouterModule, LimitPipe],
  templateUrl: './latest-video.component.html',
  styleUrl: './latest-video.component.scss',
})
export class LatestVideoComponent {
  thumbnail: string = '../../assets/angular18.jfif';
  data = {
    videoTitle: 'Angular 18',
    ranking: '2',
    clickThrough: '10',
    duration: '3.22',
    views: 100,
    comments: '10',
    likes: '50',
  };
}
