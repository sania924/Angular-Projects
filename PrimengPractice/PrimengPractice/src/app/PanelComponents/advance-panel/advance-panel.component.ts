import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../sharedModule/shared.module';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-advance-panel',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './advance-panel.component.html',
  styleUrl: './advance-panel.component.scss',
})
export class AdvancePanelComponent implements OnInit {
  tabs: { title: string; content: string }[] = [];
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.tabs = [
      { title: 'Tab 1', content: 'Tab 1 Content' },
      { title: 'Tab 2', content: 'Tab 2 Content' },
      { title: 'Tab 3', content: 'Tab 3 Content' },
    ];
    // toolbar
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
  }
}
