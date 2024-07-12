import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../modals/product';
import { ProductService } from '../product.service';
import { map } from 'rxjs';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from 'primeng/table';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule, RouterLink, SharedModule, TableModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
})
export class TablesComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products!: Product[];
  cols!: Column[];

  ngOnInit(): void {
    this.productService
      .getProductsMini()
      .pipe(
        map((products) =>
          products.filter((product) => parseInt(product.id) % 2 == 0)
        )
      )
      .subscribe((data) => {
        this.products = data;
      });
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'price', header: 'Price' },
    ];
  }
}
