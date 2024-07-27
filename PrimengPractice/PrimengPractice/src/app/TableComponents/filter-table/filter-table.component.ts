import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer, Representative } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { SharedModule } from '../../sharedModule/shared.module';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-table',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './filter-table.component.html',
  styleUrl: './filter-table.component.scss',
})
export class FilterTableComponent implements OnInit {
  @ViewChild('dt2') dt2!: Table;

  customers!: Customer[];

  representatives!: Representative[];

  statuses!: { label: string; value: string }[];

  loading: boolean = true;
  value: FormControl = new FormControl(null); // Use FormControl for two-way binding
  activityValues: number[] = [0, 100];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach(
        (customer) => (customer.date = new Date(<Date>customer.date))
      );
    });

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' },
    ];
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(
    status: string
  ):
    | 'success'
    | 'secondary'
    | 'info'
    | 'warning'
    | 'danger'
    | 'contrast'
    | undefined {
    switch (status) {
      case 'unqualified':
        return 'danger';
      case 'qualified':
        return 'success';
      case 'new':
        return 'info';
      case 'negotiation':
        return 'warning';
      case 'renewal':
        return 'secondary';
      default:
        return 'info';
    }
  }
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.dt2.filterGlobal(inputElement.value, 'contains');
  }
}
