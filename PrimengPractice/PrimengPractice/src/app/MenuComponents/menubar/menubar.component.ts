import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedModule } from '../../sharedModule/shared.module';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
})
export class MenubarComponent implements OnInit {
  items2: MenuItem[] | undefined;
  items1: MenuItem[] | undefined;
  items: MegaMenuItem[] | undefined;
  items3: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items2 = [
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ];
    this.items2 = [
      {
        separator: true,
      },
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            shortcut: '⌘+N',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            shortcut: '⌘+S',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O',
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q',
          },
        ],
      },
      {
        separator: true,
      },
    ];
    this.items2 = [
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ];
    this.items1 = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
          {
            separator: true,
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
                badge: '2',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
                badge: '3',
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3',
      },
    ];
    this.items = [
      {
        label: 'Company',
        root: true,
        items: [
          [
            {
              items: [
                {
                  label: 'Features',
                  icon: 'pi pi-list',
                  subtext: 'Subtext of item',
                },
                {
                  label: 'Customers',
                  icon: 'pi pi-users',
                  subtext: 'Subtext of item',
                },
                {
                  label: 'Case Studies',
                  icon: 'pi pi-file',
                  subtext: 'Subtext of item',
                },
              ],
            },
          ],
          [
            {
              items: [
                {
                  label: 'Solutions',
                  icon: 'pi pi-shield',
                  subtext: 'Subtext of item',
                },
                {
                  label: 'Faq',
                  icon: 'pi pi-question',
                  subtext: 'Subtext of item',
                },
                {
                  label: 'Library',
                  icon: 'pi pi-search',
                  subtext: 'Subtext of item',
                },
              ],
            },
          ],
          [
            {
              items: [
                {
                  label: 'Community',
                  icon: 'pi pi-comments',
                  subtext: 'Subtext of item',
                },
                {
                  label: 'Rewards',
                  icon: 'pi pi-star',
                  subtext: 'Subtext of item',
                },
                {
                  label: 'Investors',
                  icon: 'pi pi-globe',
                  subtext: 'Subtext of item',
                },
              ],
            },
          ],
          [
            {
              items: [
                {
                  image:
                    'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png',
                  label: 'GET STARTED',
                  subtext: 'Build spectacular apps in no time.',
                },
              ],
            },
          ],
        ],
      },
      {
        label: 'Resources',
        root: true,
      },
      {
        label: 'Contact',
        root: true,
      },
    ];
    // breadcrumbs
    this.items3 = [
      { label: 'Electronics' },
      { label: 'Computer' },
      { label: 'Accessories' },
      { label: 'Keyboard' },
      { label: 'Wireless' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
