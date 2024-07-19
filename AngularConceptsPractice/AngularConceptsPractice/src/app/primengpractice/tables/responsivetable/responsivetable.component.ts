import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../modals/product';
import { ProductService } from '../../product.service';
import { SharedModule } from '../../shared/shared.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PrimengpracticeheaderComponent } from '../../../includes/primengpracticeheader/primengpracticeheader.component';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-responsivetable',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    RouterOutlet,
    PrimengpracticeheaderComponent,
  ],
  templateUrl: './responsivetable.component.html',
  styleUrl: './responsivetable.component.scss',
})
export class ResponsivetableComponent implements OnInit {
  products!: Product[];

  cols!: Column[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'inventoryStatus', header: 'Status' },
      { field: 'rating', header: 'Rating' },
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
