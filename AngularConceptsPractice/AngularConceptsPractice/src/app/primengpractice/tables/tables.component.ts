import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Product } from '../modals/product';
import { ProductService } from '../product.service';
import { map } from 'rxjs';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [TableModule, CommonModule],
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
