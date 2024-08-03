import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { SharedModule } from '../../sharedModule/shared.module';
// for timeline
interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}
@Component({
  selector: 'app-dataview',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dataview.component.html',
  styleUrl: './dataview.component.scss',
})
export class DataviewComponent implements OnInit {
  // Declaring products array to hold Product data
  products!: Product[];
  // For timeline
  events: EventItem[];

  // Constructor to inject ProductService
  constructor(private productService: ProductService) {
    // for timeline
    this.events = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        image: 'game-controller.jpg',
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: 'pi pi-cog',
        color: '#673AB7',
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: 'pi pi-shopping-cart',
        color: '#FF9800',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B',
      },
    ];
  }

  // Lifecycle hook that runs when the component initializes
  ngOnInit() {
    // Fetch products from the service and assign the data to the products array
    this.productService.getProducts().then((data) => (this.products = data));
    // for order list
    this.productService
      .getProductsSmall()
      .then((cars) => (this.products = cars));
  }

  // Function to determine the severity (color) based on inventory status
  getSeverity(
    product: Product
  ):
    | 'success'
    | 'secondary'
    | 'info'
    | 'warning'
    | 'danger'
    | 'contrast'
    | undefined {
    // Switch statement to return severity based on inventory status
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return undefined;
    }
  }
}
