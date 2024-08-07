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
})
export class AdvanceMenuComponent implements OnInit {
  // items: MenuItem[] | undefined;

  // active: number = 0;
  items!: MenuItem[];

  subscription!: Subscription;

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

    this.subscription = this.ticketService.paymentComplete$.subscribe(
      (personalInformation: { firstname: string; lastname: string }) => {
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
}
