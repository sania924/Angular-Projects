import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../sharedModule/shared.module';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
})
export class PanelComponent implements OnInit {
  items: { label?: string; icon?: string; separator?: boolean }[] = [];
  // ssgit
  ngOnInit() {
    this.items = [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
      },
      {
        separator: true,
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
  }
}
// hello
