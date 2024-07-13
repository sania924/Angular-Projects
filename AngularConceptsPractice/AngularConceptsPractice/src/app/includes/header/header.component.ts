import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ViewchildComponent } from '../../angularConceptsPractice/decorators/viewchild/viewchild.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ViewchildComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
