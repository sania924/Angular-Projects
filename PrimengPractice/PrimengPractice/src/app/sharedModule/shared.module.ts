import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ProductService } from '../services/product.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
  ],
  exports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule,
  ],
  providers: [ProductService],
})
export class SharedModule {}
