import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../_model/products';
import { salesdata } from '../_model/salesdata';
@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}
  LoadProducts() {
    return this.http.get<products[]>('http://localhost:3000/products');
  }
  LoadSales() {
    return this.http.get<salesdata[]>('http://localhost:3000/sales');
  }
}
