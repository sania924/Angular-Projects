import { Component } from '@angular/core';
import { SharedModule } from '../../sharedModule/shared.module';

@Component({
  selector: 'app-misc',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './misc.component.html',
  styleUrl: './misc.component.scss',
})
export class MiscComponent {
  // meter Group
  value = [
    { label: 'Apps', color: '#34d399', value: 16 },
    { label: 'Messages', color: '#fbbf24', value: 8 },
    { label: 'Media', color: '#60a5fa', value: 24 },
    { label: 'System', color: '#c084fc', value: 10 },
  ];
}
