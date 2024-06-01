import { Component } from '@angular/core';
import { LimitPipe } from '../limit.pipe';

@Component({
  selector: 'app-published-videos',
  standalone: true,
  imports: [LimitPipe],
  templateUrl: './published-videos.component.html',
  styleUrl: './published-videos.component.scss',
})
export class PublishedVideosComponent {
  items = [
    {
      videoTitle: 'Angular 17',
      image: '../../assets/angular.png',

      views: '5000',
      likes: '1000',
      dislikes: '100',
      comments: '970',
    },
    {
      videoTitle: 'Angular 16',
      image: '../../assets/angular.png',

      views: '6000',
      likes: '2000',
      dislikes: '130',
      comments: '570',
    },
    {
      videoTitle: 'Angular 15',
      image: '../../assets/angular.png',

      views: '4000',
      likes: '2000',
      dislikes: '600',
      comments: '370',
    },
    {
      videoTitle: 'Angular 14',
      image: '../../assets/angular.png',
      views: '2000',
      likes: '400',
      dislikes: '20',
      comments: '100',
    },
  ];
}
