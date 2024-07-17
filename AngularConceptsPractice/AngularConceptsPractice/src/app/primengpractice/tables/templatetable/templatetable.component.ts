import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Product } from '../../modals/product';
import { ProductService } from '../../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-templatetable',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './templatetable.component.html',
  styleUrl: './templatetable.component.scss',
})
export class TemplatetableComponent implements OnInit {
  // template table
  products!: Product[];
  // size table
  sizes!: any[];
  selectedSize: any = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data: any) => {
      this.products = data;
    });
    // sizetable
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });

    this.sizes = [
      { name: 'Small', class: 'p-datatable-sm' },
      { name: 'Normal', class: '' },
      { name: 'Large', class: 'p-datatable-lg' },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
