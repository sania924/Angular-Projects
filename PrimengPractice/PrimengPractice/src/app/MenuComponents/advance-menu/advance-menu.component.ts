import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../sharedModule/shared.module';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { TicketService } from '../../services/ticket.service';

import {} from 'primeng/api';

@Component({
  selector: 'app-advance-menu',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './advance-menu.component.html',
  styleUrl: './advance-menu.component.scss',
  providers: [MessageService, TicketService], // Add this line
})
export class AdvanceMenuComponent implements OnInit {
  items: MenuItem[] = [];
  items2: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  subscription: Subscription = new Subscription();

  constructor(
    public messageService: MessageService,
    public ticketService: TicketService
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Personal',
        routerLink: 'personal',
      },
      {
        label: 'Seat',
        routerLink: 'seat',
      },
      {
        label: 'Payment',
        routerLink: 'payment',
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation',
      },
    ];
    this.items2 = [
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'Transactions', icon: 'pi pi-chart-line' },
      { label: 'Products', icon: 'pi pi-list' },
      { label: 'Messages', icon: 'pi pi-inbox' },
    ];
    this.activeItem = this.items[0];

    this.subscription = this.ticketService.paymentComplete$.subscribe(
      (personalInformation) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Order submitted',
          detail:
            'Dear, ' +
            personalInformation.firstname +
            ' ' +
            personalInformation.lastname +
            ' your order completed.',
        });
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
