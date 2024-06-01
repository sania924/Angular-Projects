import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-comments',
  standalone: true,
  imports: [],
  templateUrl: './latest-comments.component.html',
  styleUrl: './latest-comments.component.scss',
})
export class LatestCommentsComponent {
  data = [
    {
      ProfileImageSrc: '../../assets/user.png',
      username: 'Angular',

      comment: 'good version',
      thumbnailSrc: '../../assets/angular18.jfif',
    },
  ];
}
